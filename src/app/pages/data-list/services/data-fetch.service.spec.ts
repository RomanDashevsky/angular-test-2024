import { TestBed } from '@angular/core/testing';

import { DataFetchService } from './data-fetch.service';
import { WorkerDataProviderAdapter } from './worker-data-provider-adapter.service';
import { WorkerDataProviderAdapterStub } from '../../../../../tests/stubs/worker-data-provider-adapter.service.stub';

// TODO: it's affected by TS1343 issue
describe.skip('DataFetchService', () => {
  let service: DataFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataFetchService,
        {
          provide: WorkerDataProviderAdapter,
          useClass: WorkerDataProviderAdapterStub,
        },
      ],
    });
    service = TestBed.inject(DataFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
