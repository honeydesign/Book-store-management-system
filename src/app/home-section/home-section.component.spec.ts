import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSectionComponent } from './home-section.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeSectionComponent', () => {
  let component: HomeSectionComponent;
  let fixture: ComponentFixture<HomeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSectionComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main title', () => {
    const title = fixture.debugElement.query(By.css('.title h1')).nativeElement;
    expect(title.textContent).toContain('Welcome to the store');
  });

  it('should render the subtitle', () => {
    const subtitle = fixture.debugElement.query(By.css('.sub-title h4')).nativeElement;
    expect(subtitle.textContent).toContain('Experience the future of books');
  });

  it('should render the Shop Now button', () => {
    const button = fixture.debugElement.query(By.css('.button h5')).nativeElement;
    expect(button.textContent).toBe('Shop Now');
  });

  it('should display 4 feature containers in section-two', () => {
    const containers = fixture.debugElement.queryAll(By.css('.section-two .container'));
    expect(containers.length).toBe(4);
  });
});


