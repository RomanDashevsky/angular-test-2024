import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [SharedModule, AboutMeRoutingModule],
  exports: [AboutMeComponent],
})
export class AboutMeModule {}
