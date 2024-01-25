import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTablePageComponent } from './components/page/data-table-page.component';

const routes: Routes = [
  {
    path: '',
    component: DataTablePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataListRoutingModule {}
