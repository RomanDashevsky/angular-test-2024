import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatestWith, debounceTime, map, Subject, switchMap, takeUntil } from 'rxjs';
import { DataItemDto } from '../types';
import { DataFetchSettingsService } from './data-fetch-settings.service';
import { DataFetchService } from './data-fetch.service';
import { RENDER_DATA_LIST_SIZE } from '../constants';
import { DataTableItem } from '../models/data-table-item';

@Injectable()
export class DataStoreService {
  data$ = new BehaviorSubject<DataTableItem[]>([]);
  isLoading$ = this.fetchService.isLoading$.pipe(debounceTime(100));

  private destroy$ = new Subject<void>();
  constructor(private readonly fetchService: DataFetchService, private readonly settingsService: DataFetchSettingsService) {}

  init() {
    this.settingsService.listSize$
      .pipe(
        combineLatestWith(this.settingsService.reaperTime$),
        takeUntil(this.destroy$),
        switchMap(([size, time]) => this.fetchService.getDataByInterval(size, time)),
        map((data) => {
          const sliceSize = RENDER_DATA_LIST_SIZE >= data.length ? data.length : RENDER_DATA_LIST_SIZE;

          return data.slice(-sliceSize);
        }),
        map((data) => {
          return data.map((item, index) => this.transformRawDataToTableModel(item, index));
        })
      )
      .subscribe({
        next: (data) => this.data$.next(data),
        error: (error) => {
          // TODO: add error handle case
          console.error(error);
        },
      });
  }

  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.fetchService.destroy();
  }

  private transformRawDataToTableModel(item: DataItemDto, index: number): DataTableItem {
    const additionalIds = this.settingsService.additionalIds;
    const itemModel = new DataTableItem(item);

    itemModel.maskId = index < additionalIds.length ? additionalIds[index] : undefined;

    return itemModel;
  }
}
