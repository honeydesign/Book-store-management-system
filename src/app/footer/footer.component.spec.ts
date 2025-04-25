import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo image', () => {
    const logoImg = fixture.debugElement.query(By.css('.logo img'));
    expect(logoImg).toBeTruthy();
    expect(logoImg.nativeElement.getAttribute('src')).toContain('/assets/book logo.jpg');
  });

  it('should contain the support section title', () => {
    const supportTitle = fixture.debugElement.query(By.css('.container-one .title h3'));
    expect(supportTitle.nativeElement.textContent).toContain('Support');
  });

  it('should list all support links', () => {
    const supportLinks = fixture.debugElement.queryAll(By.css('.container-one .sub-texts h5'));
    const expectedLinks = ['Help and support', 'Terms and conditions', 'Support', 'FAQs'];
    expect(supportLinks.length).toBe(expectedLinks.length);
    expectedLinks.forEach((text, index) => {
      expect(supportLinks[index].nativeElement.textContent).toContain(text);
    });
  });

  it('should contain the "Stay Connected" section title', () => {
    const stayConnectedTitle = fixture.debugElement.query(By.css('.container-two .title h3'));
    expect(stayConnectedTitle.nativeElement.textContent).toContain('Stay Connected');
  });

  it('should display email placeholder text', () => {
    const emailPlaceholder = fixture.debugElement.query(By.css('.email-container h5'));
    expect(emailPlaceholder.nativeElement.textContent).toContain('Enter email address');
  });

  it('should display submit button', () => {
    const submitBtn = fixture.debugElement.query(By.css('.submit h5'));
    expect(submitBtn.nativeElement.textContent).toContain('Submit');
  });

  it('should show the subscription text', () => {
    const subText = fixture.debugElement.query(By.css('.container-two .sub-texts h5'));
    expect(subText.nativeElement.textContent).toContain('Get the latest news and updates');
  });
});

