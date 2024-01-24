import { Component } from '@angular/core';
import { AppRoutes } from '../../../app.routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  links = AppRoutes;
}
