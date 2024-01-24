import { NgModule } from '@angular/core';
import { DataListComponent } from './components/list/data-list.component';
import { DataListRoutingModule } from './data-list-routing.module';
import { DataListSettingsComponent } from './components/settings/data-list-settings.component';
import { DataListPageComponent } from './components/page/data-list-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DataListComponent, DataListSettingsComponent, DataListPageComponent],
  imports: [DataListRoutingModule, SharedModule],
  exports: [DataListComponent],
})
export class DataListModule {}
