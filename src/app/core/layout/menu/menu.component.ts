import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRoutes } from '../../../app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  links = AppRoutes;
}
