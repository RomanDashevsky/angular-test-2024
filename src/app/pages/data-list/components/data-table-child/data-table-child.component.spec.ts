import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableChildComponent } from './data-table-child.component';

describe('DataTableChildComponent', () => {
  let component: DataTableChildComponent;
  let fixture: ComponentFixture<DataTableChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
