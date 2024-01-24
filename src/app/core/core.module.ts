import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { NotFoundPageModule } from './not-found-page/not-found-page.module';
import { SharedModule } from '../shared/shared.module';

const modules = [SharedModule, LayoutModule, NotFoundPageModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class CoreModule {}
