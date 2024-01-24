import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataProviderWorkerMessageResponse } from '../types';
import { createWorker } from '../utils/create-worker';

@Injectable()
export class WorkerDataProviderAdapter {
  private worker: Worker;
  private dataSubject$ = new Subject<DataProviderWorkerMessageResponse>();
  private messageHandler;
  constructor() {
    this.messageHandler = ({ data }: MessageEvent<DataProviderWorkerMessageResponse>) => {
      this.dataSubject$.next(data);
    };

    this.worker = createWorker();
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
