import { TestBed } from '@angular/core/testing';

import { WorkerDataProviderAdapter } from './worker-data-provider-adapter.service';

import { DataProviderWorkerMessageResponse } from '../types';
import { take } from 'rxjs';

// TODO: it's affected by TS1343 issue, need to investigate to working solutions
// switched to save time and implement another stuff
describe('WorkerDataProviderAdapter', () => {
  let service: WorkerDataProviderAdapter;
  let worker: Worker;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkerDataProviderAdapter],
    });

    service = TestBed.inject(WorkerDataProviderAdapter);
    worker = service['worker'];
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create WorkerDataProviderAdapter', () => {
    expect(service).toBeTruthy();
  });

  it('should post a message and receive data', (done) => {
    const size = 10;
    const getId = 1;
    const tickId = 2;

    const responseMock: DataProviderWorkerMessageResponse = {
      data: [],
      getId,
      tickId,
    };

    const postMessageMock = worker.postMessage;

    service
      .getData(size, getId, tickId)
      .pipe(take(1))
      .subscribe((data) => {
        expect(data).toEqual(responseMock);
        done();
      });

    service['messageHandler']({ data: responseMock } as MessageEvent<DataProviderWorkerMessageResponse>);

    expect(postMessageMock).toHaveBeenCalledWith({ size, getId, tickId });
  });

  it('should destroy the worker', () => {
    const removeEventListenerMock = worker.removeEventListener;
    const terminateMock = worker.terminate;

    service.destroy();

    expect(removeEventListenerMock).toHaveBeenCalledWith('message', service['messageHandler']);
    expect(terminateMock).toHaveBeenCalled();
  });
});
