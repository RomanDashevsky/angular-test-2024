import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable()
export class DataFetchServiceStub {
  isLoading$ = new BehaviorSubject<boolean>(false);
  private currentGetId$ = new BehaviorSubject<number>(0);
  private currentTickId$ = new BehaviorSubject<number>(0);

  destroy = jest.fn();
  getDataByInterval = jest.fn().mockImplementation(() => of({ data: [], tickId: 0, getId: 0 }));

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
