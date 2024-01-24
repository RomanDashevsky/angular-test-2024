import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListSettingsComponent } from './data-list-settings.component';
import { DataFetchSettingsServiceStub } from '../../../../../../tests/stubs/data-fetch-settings-service.stub';
import { DataFetchSettingsService } from '../../services/data-fetch-settings.service';
import { SharedModule } from '../../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DataListSettingsComponent', () => {
  let component: DataListSettingsComponent;
  let fixture: ComponentFixture<DataListSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule],
      declarations: [DataListSettingsComponent],
      providers: [
        {
          provide: DataFetchSettingsService,
          useClass: DataFetchSettingsServiceStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DataListSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
