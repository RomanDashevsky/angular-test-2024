import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatestWith, debounceTime, map, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { DataItem } from '../types';
import { DataFetchSettingsService } from './data-fetch-settings.service';
import { DataFetchService } from './data-fetch.service';
import { RENDER_DATA_LIST_SIZE } from '../constants';
import { DataSource } from '@angular/cdk/collections';

@Injectable()
export class DataStoreService extends DataSource<DataItem> {
  data$ = new BehaviorSubject<DataItem[]>([]);
  isLoading$ = this.fetchService.isLoading$.pipe(debounceTime(100));

  private destroy$ = new Subject<void>();
  constructor(private readonly fetchService: DataFetchService, private readonly settingsService: DataFetchSettingsService) {
    super();
  }

  connect(): Observable<DataItem[]> {
    return this.data$.asObservable();
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
        })
      )
      .subscribe({
        next: (data) => this.data$.next(data),
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
}
