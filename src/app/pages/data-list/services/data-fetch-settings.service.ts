import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_DATA_LIST_SIZE, DEFAULT_FETCH_REPEAT_TIMER } from '../constants';

@Injectable()
export class DataFetchSettingsService {
  listSize$ = new BehaviorSubject<number>(DEFAULT_DATA_LIST_SIZE);
  reaperTime$ = new BehaviorSubject<number>(DEFAULT_FETCH_REPEAT_TIMER);
  additionalIds$ = new BehaviorSubject<string[]>([]);

  get listSize(): number {
    return this.listSize$.getValue();
  }

  set listSize(value: number) {
    this.listSize$.next(value);
  }

  get reaperTime(): number {
    return this.reaperTime$.getValue();
  }

  set reaperTime(value: number) {
    this.reaperTime$.next(value);
  }

  get additionalIds(): string[] {
    return this.additionalIds$.getValue();
  }

  set additionalIds(value: string[]) {
    this.additionalIds$.next(value);
  }
}
