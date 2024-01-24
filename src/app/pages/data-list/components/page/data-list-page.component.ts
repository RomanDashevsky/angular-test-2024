import { Component } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { WorkerDataProviderAdapter } from '../../services/worker-data-provider-adapter.service';
import { DataFetchSettingsService } from '../../services/data-fetch-settings.service';
import { DataFetchService } from '../../services/data-fetch.service';

@Component({
  selector: 'app-data-list-page',
  templateUrl: './data-list-page.component.html',
  styleUrls: ['./data-list-page.component.scss'],
  providers: [DataStoreService, WorkerDataProviderAdapter, DataFetchSettingsService, DataFetchService],
})
export class DataListPageComponent {}
