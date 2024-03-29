import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject, switchMap, takeUntil, tap, timer } from 'rxjs';
import { DataItemDto } from '../types';
import { WorkerDataProviderAdapter } from './worker-data-provider-adapter.service';

@Injectable()
export class DataFetchService {
  isLoading$ = new BehaviorSubject<boolean>(false);

  private currentGetId$ = new BehaviorSubject<number>(0);
  private currentTickId$ = new BehaviorSubject<number>(0);
  private destroy$ = new Subject<void>();

  constructor(private readonly providerService: WorkerDataProviderAdapter) {}

  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.providerService.destroy();
  }

  getDataByInterval(size: number, time: number): Observable<DataItemDto[]> {
    const current = this.currentGetId;

    this.currentGetId = current + 1;
    this.currentTickId = 0;

    return timer(0, time).pipe(
      takeUntil(this.destroy$),
      switchMap((tickId) => {
        this.currentTickId = tickId;
        this.isLoading = true;

        return this.providerService.getData(size, current, tickId).pipe(
          // pass only current state responses, to avoid non current data
          filter(({ getId }) => getId === current),
          tap(({ getId, tickId }) => {
            if (getId === current && tickId !== this.currentTickId) {
              // TODO: handle better this case, for example add notification or add skipping tick logic or something else
              console.error('There are less time for getting data before new interval tick!');
            }
          }),
          map(({ data }) => data),
          tap(() => {
            this.isLoading = false;
          })
        );
      })
    );
  }

  private get currentGetId(): number {
    return this.currentGetId$.getValue();
  }

  private set currentGetId(value: number) {
    this.currentGetId$.next(value);
  }

  private get currentTickId(): number {
    return this.currentTickId$.getValue();
  }

  private set currentTickId(value: number) {
    this.currentTickId$.next(value);
  }

  private set isLoading(value: boolean) {
    this.isLoading$.next(value);
  }
}
