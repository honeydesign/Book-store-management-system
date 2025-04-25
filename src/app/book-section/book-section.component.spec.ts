import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookSectionComponent } from './book-section.component';
import { BookCardComponent } from '../book-card/book-card.component';

describe('BookSectionComponent', () => {
  let component: BookSectionComponent;
  let fixture: ComponentFixture<BookSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookSectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BookSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the book section component', () => {
    expect(component).toBeTruthy();
  });

  it('should render latest books section with book cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Latest Books');
    expect(compiled.querySelectorAll('app-book-card').length).toBeGreaterThan(0);
  });

  it('should render fiction and non-fiction book sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Fiction Books');
    expect(compiled.textContent).toContain('Non-Fiction Books');
  });
});
