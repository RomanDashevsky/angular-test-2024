import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataFetchSettingsService } from '../../services/data-fetch-settings.service';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-data-settings',
  templateUrl: './data-list-settings.component.html',
  styleUrls: ['./data-list-settings.component.scss'],
})
export class DataListSettingsComponent {
  destroy$ = new Subject<void>();
  form: FormGroup;
  gridCols = 3;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly settingsService: DataFetchSettingsService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.form = this.formBuilder.group({
      reaperTime: [this.settingsService.reaperTime],
      listSize: [this.settingsService.listSize],
      additionalIds: [this.settingsService.additionalIds.join(',')],
    });

    this.initChangeControlTrackers();
    this.observeScreenSize();
  }

  initChangeControlTrackers(): void {
    this.form
      .get('reaperTime')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((data) => (this.settingsService.reaperTime = data));

    this.form
      .get('listSize')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((data) => (this.settingsService.listSize = data));

    this.form
      .get('additionalIds')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((data) => (this.settingsService.additionalIds = data.split(',')));
  }

  private observeScreenSize(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result.matches) {
          this.gridCols = 1;
        } else {
          this.gridCols = 3;
        }
      });
  }
}
