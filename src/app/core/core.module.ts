import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { NotFoundPageModule } from './not-found-page/not-found-page.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const modules = [CommonModule, BrowserAnimationsModule, LayoutModule, NotFoundPageModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class CoreModule {}
