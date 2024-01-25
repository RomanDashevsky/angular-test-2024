import { NgModule } from '@angular/core';
import { DataTableComponent } from './components/table/data-table.component';
import { DataListRoutingModule } from './data-list-routing.module';
import { DataSettingsComponent } from './components/settings/data-settings.component';
import { DataTablePageComponent } from './components/page/data-table-page.component';
import { SharedModule } from '../../shared/shared.module';
import { MaskIdPipe } from './pipes/mask-id.pipe';
import { DataTableChildComponent } from './components/data-table-child/data-table-child.component';

@NgModule({
  declarations: [DataTableComponent, DataSettingsComponent, DataTablePageComponent, MaskIdPipe, DataTableChildComponent],
  imports: [DataListRoutingModule, SharedModule],
  exports: [DataTableComponent],
})
export class DataListModule {}
