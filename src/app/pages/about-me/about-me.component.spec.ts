import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';
import { environment } from '../../../environments/environment';
import { MaterialUiModule } from '../../shared/material-ui/material-ui.module';

const aboutMeDataMock = {
  fullName: 'John Doe',
  email: 'john@example.com',
  telegram: '@johndoe',
  gitHubUrl: 'https://github.com/johndoe',
};

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(() => {
    environment.aboutMeData = { ...aboutMeDataMock };
    TestBed.configureTestingModule({
      declarations: [AboutMeComponent],
      imports: [MaterialUiModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have mat-list-items for each property', () => {
    fixture.detectChanges();

    const listItems = fixture.nativeElement.querySelectorAll('mat-list-item');

    expect(listItems.length).toBe(4);
  });
});
