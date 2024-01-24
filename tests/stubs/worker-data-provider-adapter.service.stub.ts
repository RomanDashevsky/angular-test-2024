import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class WorkerDataProviderAdapterStub {
  getData = jest.fn().mockImplementation(() => of({ data: [], tickId: 0, getId: 0 }));
  destroy = jest.fn();
}
