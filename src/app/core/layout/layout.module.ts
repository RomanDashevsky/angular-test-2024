import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { PageContainerComponent } from './page-container/page-container.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [MenuComponent, HeaderComponent, PageContainerComponent],
  imports: [MaterialUiModule, RouterLink, RouterLinkActive],
  exports: [PageContainerComponent, HeaderComponent],
})
export class LayoutModule {}
