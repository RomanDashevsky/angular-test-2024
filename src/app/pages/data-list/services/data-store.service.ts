import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatestWith, debounceTime, map, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { DataItemDto } from '../types';
import { DataFetchSettingsService } from './data-fetch-settings.service';
import { DataFetchService } from './data-fetch.service';
import { RENDER_DATA_LIST_SIZE } from '../constants';
import { DataSource } from '@angular/cdk/collections';
import { DataTableItem } from '../models/data-table-item';

@Injectable()
export class DataStoreService extends DataSource<DataTableItem> {
  data$ = new BehaviorSubject<DataTableItem[]>([]);
  isLoading$ = this.fetchService.isLoading$.pipe(debounceTime(100));

  private destroy$ = new Subject<void>();
  constructor(private readonly fetchService: DataFetchService, private readonly settingsService: DataFetchSettingsService) {
    super();
  }

  connect(): Observable<DataTableItem[]> {
    return this.data$.asObservable().pipe(
      tap((data) => {
        console.log('connect');
        console.log(data);
      })
    );
  }

  disconnect(): void {
    this.data$.complete();
  }

  init() {
    this.settingsService.listSize$
      .pipe(
        combineLatestWith(this.settingsService.reaperTime$),
        takeUntil(this.destroy$),
        switchMap(([size, time]) => this.fetchService.getDataByInterval(size, time)),
        map((data) => {
          const sliceSize = RENDER_DATA_LIST_SIZE >= data.length ? RENDER_DATA_LIST_SIZE : data.length;

          return data.slice(-sliceSize);
        }),
        map((data) => {
          return data.map((item, index) => this.transformRawDataToTableModel(item, index));
        })
      )
      .subscribe({
        next: (data) => {
          console.log('next');
          console.log(data);
          this.data$.next(data);
        },
        error: (error) => {
          // TODO: add error handle case
          console.error(error);
        },
        complete: () => console.log('closed'),
      });
  }

  destroy() {
    this.destroy$.next();
    this.fetchService.destroy();
  }

  private transformRawDataToTableModel(item: DataItemDto, index: number): DataTableItem {
    const additionalIds = this.settingsService.additionalIds;
    const itemModel = new DataTableItem(item);

    itemModel.maskId = index < additionalIds.length ? additionalIds[index] : undefined;

    return itemModel;
  }
}
