import { Component, HostBinding } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { WorkerDataProviderAdapter } from '../../services/worker-data-provider-adapter.service';
import { DataFetchSettingsService } from '../../services/data-fetch-settings.service';
import { DataFetchService } from '../../services/data-fetch.service';

@Component({
  selector: 'app-data-table-page',
  templateUrl: './data-table-page.component.html',
  styleUrls: ['./data-table-page.component.scss'],
  providers: [DataStoreService, WorkerDataProviderAdapter, DataFetchSettingsService, DataFetchService],
})
export class DataTablePageComponent {
  // host binding case for page styling also these classes could be a part of div wrapper at template
  @HostBinding('class.page-container') isPageContainer = true;
}
