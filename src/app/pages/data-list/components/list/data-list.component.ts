import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { trackById } from '../../utils/tackBy';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent implements OnInit, OnDestroy {
  trackById = trackById;
  displayedColumns = ['id', 'int', 'float', 'color', 'child'];

  constructor(readonly store: DataStoreService) {}

  ngOnInit(): void {
    this.store.init();
  }

  ngOnDestroy(): void {
    this.store.destroy();
  }
}
