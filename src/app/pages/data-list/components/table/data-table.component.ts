import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { trackById } from '../../utils/tackBy';
import { DataTableItem } from '../../models/data-table-item';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, OnDestroy {
  trackById = trackById;
  displayedColumns = ['id', 'int', 'float', 'color', 'child'];
  dataSource: DataTableItem[] = [];

  constructor(readonly store: DataStoreService) {}

  ngOnInit(): void {
    this.store.init();
  }

  ngOnDestroy(): void {
    this.store.destroy();
  }
}
