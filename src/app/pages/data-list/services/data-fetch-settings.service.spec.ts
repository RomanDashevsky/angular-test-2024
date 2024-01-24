import { TestBed } from '@angular/core/testing';

import { DataFetchSettingsService } from './data-fetch-settings.service';

describe('DataFetchSettingsService', () => {
  let service: DataFetchSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFetchSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
