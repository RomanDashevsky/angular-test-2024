import { Component } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { WorkerDataProviderService } from '../../services/worker-data-provider.service';
import { DataFetchSettingsService } from '../../services/data-fetch-settings.service';
import { DataFetchService } from '../../services/data-fetch.service';

@Component({
  selector: 'app-data-list-page',
  templateUrl: './data-list-page.component.html',
  styleUrls: ['./data-list-page.component.scss'],
  providers: [DataStoreService, WorkerDataProviderService, DataFetchSettingsService, DataFetchService],
})
export class DataListPageComponent {}
