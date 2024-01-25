import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { trackById } from '../../utils/tackBy';
import { DataTableItem } from '../../models/data-table-item';

@Component({
  selector: 'app-data-table-child',
  templateUrl: './data-table-child.component.html',
  styleUrls: ['./data-table-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableChildComponent {
  @Input() item?: DataTableItem['child'];

  displayedChildColumns = ['id', 'color'];

  protected readonly trackById = trackById;
}
