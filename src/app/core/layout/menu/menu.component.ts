import { Component } from '@angular/core';
import { AppRoutes } from '../../../app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  links = AppRoutes;
}
