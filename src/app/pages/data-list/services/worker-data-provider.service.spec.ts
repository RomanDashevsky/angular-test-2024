import { TestBed } from '@angular/core/testing';

import { WorkerDataProviderService } from './worker-data-provider.service';

describe('WorkerDataProviderService', () => {
  let service: WorkerDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
