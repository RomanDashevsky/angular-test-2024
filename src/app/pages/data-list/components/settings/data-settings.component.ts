import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataFetchSettingsService } from '../../services/data-fetch-settings.service';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-data-settings',
  templateUrl: './data-settings.component.html',
  styleUrls: ['./data-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSettingsComponent {
  destroy$ = new Subject<void>();
  form: FormGroup;
  isMobile = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly settingsService: DataFetchSettingsService,
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
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
      .subscribe(
        (data) =>
          (this.settingsService.additionalIds = data
            .split(',')
            .map((item: string) => item.trim())
            .filter((item: string) => !!item))
      );
  }

  private observeScreenSize(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.isMobile = result.matches;
        this.cdr.markForCheck();
      });
  }
}
