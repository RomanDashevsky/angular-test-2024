import { NgModule } from '@angular/core';
import { DataTableComponent } from './components/table/data-table.component';
import { DataListRoutingModule } from './data-list-routing.module';
import { DataSettingsComponent } from './components/settings/data-settings.component';
import { DataTablePageComponent } from './components/page/data-table-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DataTableComponent, DataSettingsComponent, DataTablePageComponent],
  imports: [DataListRoutingModule, SharedModule],
  exports: [DataTableComponent],
})
export class DataListModule {}
