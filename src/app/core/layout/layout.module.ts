import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MaterialUiModule } from '../../shared/material-ui/material-ui.module';
import { PageContainerComponent } from './page-container/page-container.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [MenuComponent, HeaderComponent, PageContainerComponent],
  imports: [MaterialUiModule, RouterLink, RouterLinkActive, BrowserAnimationsModule, BrowserModule],
  exports: [PageContainerComponent, HeaderComponent],
})
export class LayoutModule {}
