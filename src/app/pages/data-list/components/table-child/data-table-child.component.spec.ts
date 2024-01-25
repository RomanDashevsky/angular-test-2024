import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableChildComponent } from './data-table-child.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaskIdPipe } from '../../pipes/mask-id.pipe';
import { SafePipe } from '../../pipes/safe.pipe';
import { BgColorPipe } from '../../pipes/bg-color.pipe';

describe('DataTableChildComponent', () => {
  let component: DataTableChildComponent;
  let fixture: ComponentFixture<DataTableChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableChildComponent, MaskIdPipe, SafePipe, BgColorPipe],
      imports: [MatTableModule, MatIconModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
