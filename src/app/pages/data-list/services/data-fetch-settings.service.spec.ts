import { TestBed } from '@angular/core/testing';

import { DataFetchSettingsService } from './data-fetch-settings.service';
import { skip, take } from 'rxjs';
import { DEFAULT_DATA_LIST_SIZE, DEFAULT_FETCH_REPEAT_TIMER } from '../constants';

describe('DataFetchSettingsService', () => {
  let service: DataFetchSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DataFetchSettingsService] });
    service = TestBed.inject(DataFetchSettingsService);
  });

  it('should have default table size, reaper time, and additional ids', () => {
    expect(service.listSize).toEqual(DEFAULT_DATA_LIST_SIZE);
    expect(service.reaperTime).toEqual(DEFAULT_FETCH_REPEAT_TIMER);
    expect(service.additionalIds).toEqual([]);
  });

  it('should set and get table size', () => {
    const newListSize = 20;

    service.listSize = newListSize;

    expect(service.listSize).toEqual(newListSize);
    expect(service.listSize$.getValue()).toEqual(newListSize);
  });

  it('should set and get reaper time', () => {
    const newReaperTime = 5000;

    service.reaperTime = newReaperTime;

    expect(service.reaperTime).toEqual(newReaperTime);
    expect(service.reaperTime$.getValue()).toEqual(newReaperTime);
  });

  it('should set and get additional ids', () => {
    const newAdditionalIds = ['id1', 'id2'];

    service.additionalIds = newAdditionalIds;

    expect(service.additionalIds).toEqual(newAdditionalIds);
    expect(service.additionalIds$.getValue()).toEqual(newAdditionalIds);
  });

  it('should emit changes in table size', (done) => {
    const newListSize = 30;

    service.listSize$.pipe(skip(1), take(1)).subscribe((value) => {
      expect(value).toEqual(newListSize);
      done();
    });

    service.listSize = newListSize;
  });

  it('should emit changes in reaper time', (done) => {
    const newReaperTime = 10000;

    service.reaperTime$.pipe(skip(1), take(1)).subscribe((value) => {
      expect(value).toEqual(newReaperTime);
      done();
    });

    service.reaperTime = newReaperTime;
  });

  it('should emit changes in additional ids', (done) => {
    const newAdditionalIds = ['id3', 'id4'];

    service.additionalIds$.pipe(skip(1), take(1)).subscribe((value) => {
      expect(value).toEqual(newAdditionalIds);
      done();
    });

    service.additionalIds = newAdditionalIds;
  });
});
