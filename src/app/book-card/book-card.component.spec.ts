import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookCardComponent } from './book-card.component';
import { By } from '@angular/platform-browser';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCardComponent]  // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;

    // Provide default input values
    component.bookTitle = 'Test Book';
    component.bookAuthor = 'Test Author';
    component.bookImage = '/assets/test.jpg';
    component.bookPrice = 10;
    component.bookRating = 3;
    
    fixture.detectChanges();
  });

  it('should display book title, author, price and rating', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('h3').textContent).toContain('Test Book');
    expect(compiled.querySelector('p').textContent).toContain('Test Author');
    expect(compiled.querySelector('.price').textContent).toContain('£10'); // Or '$10' if USD
    expect(compiled.querySelectorAll('.rating span').length).toBe(3); // adjust class/tag
  });

  it('should show "View Details" button on hover', () => {
    const card = fixture.debugElement.query(By.css('.book-card'));
  
    // Simulate mouseenter (hover)
    card.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
  
    // Now the button should exist in the DOM
    const button = fixture.debugElement.query(By.css('button.show-button'));
  
    expect(button).toBeTruthy();  // Make sure the button is now present
    expect(button.nativeElement.textContent).toContain('View Details');
  });
  
});

