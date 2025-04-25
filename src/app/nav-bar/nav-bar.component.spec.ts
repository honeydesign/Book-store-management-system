import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';
import { By } from '@angular/platform-browser';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent] 
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the navbar component', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close the sidebar when the hamburger menu is clicked', () => {
    const hamburger = fixture.debugElement.query(By.css('.hamburger-menu'));
    hamburger.triggerEventHandler('click');
    fixture.detectChanges();
    expect(component.menuOpen).toBeTrue();

    hamburger.triggerEventHandler('click');
    fixture.detectChanges();
    expect(component.menuOpen).toBeFalse();
  });

  it('should toggle the dropdown menu visibility when clicking on "Fiction" text', () => {
    const fiction = fixture.debugElement.query(By.css('.nav-text:nth-child(2)'));
    fiction.triggerEventHandler('click');
    fixture.detectChanges();
    expect(component.activeDropdown).toBe('fiction');

    fiction.triggerEventHandler('click');
    fixture.detectChanges();
    expect(component.activeDropdown).toBeNull();
  });
});
