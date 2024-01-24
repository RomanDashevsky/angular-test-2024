import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataListPageComponent } from './components/page/data-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: DataListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataListRoutingModule {}
