import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListSettingsComponent } from './data-list-settings.component';

describe('DataListSettingsComponent', () => {
  let component: DataListSettingsComponent;
  let fixture: ComponentFixture<DataListSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataListSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataListSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
