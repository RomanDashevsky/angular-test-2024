import { TestBed } from '@angular/core/testing';

import { DataStoreService } from './data-store.service';

// TODO: it's affected by TS1343 issue
describe.skip('DataStoreService', () => {
  let service: DataStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
