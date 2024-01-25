import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSettingsComponent } from './data-settings.component';
import { DataFetchSettingsServiceStub } from '../../../../../../tests/stubs/data-fetch-settings-service.stub';
import { DataFetchSettingsService } from '../../services/data-fetch-settings.service';
import { SharedModule } from '../../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DataSettingsComponent', () => {
  let component: DataSettingsComponent;
  let fixture: ComponentFixture<DataSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule],
      declarations: [DataSettingsComponent],
      providers: [
        {
          provide: DataFetchSettingsService,
          useClass: DataFetchSettingsServiceStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DataSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
