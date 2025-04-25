import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../book-card/book-card.component'; // Import the BookCardComponent

@Component({
  selector: 'app-book-section',
  standalone: true,
  imports: [CommonModule,BookCardComponent],  // Ensure BookCardComponent is imported
  templateUrl: './book-section.component.html',
  styleUrls: ['./book-section.component.css']
})
export class BookSectionComponent {
  latestBooks = [
    { title: 'Walk into the shadow', author: 'Charles Adam', image: '/assets/walk of shadow.jpg', price: 10, rating: 4 },
    { title: 'Hide and seek', author: 'Charles Adam', image: '/assets/hide and seek.jpg', price: 15, rating: 2 },
    { title: 'Tales under a purple sky', author: 'Charles Adam', image: '/assets/tales under.jpg', price: 15, rating: 3 },
    { title: 'Harry Potter', author: 'Charles Adam', image: '/assets/harry porter.jpg', price: 15, rating: 5 }
  ];

  fictionBooks = [
    { title: 'Walk into the shadow', author: 'Charles Adam', image: '/assets/walk of shadow.jpg', price: 10, rating: 4 },
    { title: 'Hide and seek', author: 'Charles Adam', image: '/assets/hide and seek.jpg', price: 15, rating: 5 },
    { title: 'Tales under a purple sky', author: 'Charles Adam', image: '/assets/tales under.jpg', price: 15, rating: 5 },
    { title: 'Harry Potter', author: 'Charles Adam', image: '/assets/harry porter.jpg', price: 15, rating: 5 }
  ];

  nonFictionBooks = [
    { title: 'Walk into the shadow', author: 'Charles Adam', image: '/assets/walk of shadow.jpg', price: 10, rating: 4 },
    { title: 'Hide and seek', author: 'Charles Adam', image: '/assets/hide and seek.jpg', price: 15, rating: 5 },
    { title: 'Tales under a purple sky', author: 'Charles Adam', image: '/assets/tales under.jpg', price: 15, rating: 5 },
    { title: 'Harry Potter', author: 'Charles Adam', image: '/assets/harry porter.jpg', price: 15, rating: 5 }
  ];
}
