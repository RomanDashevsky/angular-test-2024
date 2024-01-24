import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataProviderWorkerMessageResponse } from '../types';

@Injectable()
export class WorkerDataProviderService {
  private worker: Worker;
  private dataSubject$ = new Subject<DataProviderWorkerMessageResponse>();
  private messageHandler;
  constructor() {
    this.messageHandler = ({ data }: MessageEvent<DataProviderWorkerMessageResponse>) => {
      console.log('Hello from worker service');
      console.log(data);
      this.dataSubject$.next(data);
    };

    console.log('worker construct');
    this.worker = new Worker(new URL('../workers/data-provider.worker.ts', import.meta.url));
    this.worker.addEventListener('message', this.messageHandler);
  }

  getData(size: number, getId: number, tickId: number): Observable<DataProviderWorkerMessageResponse> {
    this.worker?.postMessage({ size, getId, tickId });

    return this.dataSubject$.asObservable();
  }

  destroy(): void {
    this.worker.removeEventListener('message', this.messageHandler);
    this.worker?.terminate();
  }
}
