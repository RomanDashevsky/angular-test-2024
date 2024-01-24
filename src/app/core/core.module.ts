import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { NotFoundPageModule } from './not-found-page/not-found-page.module';

@NgModule({
  imports: [LayoutModule, NotFoundPageModule],
  exports: [LayoutModule, NotFoundPageModule],
})
export class CoreModule {}
