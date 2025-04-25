import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule,CurrencyPipe],  // Ensure CurrencyPipe is imported
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() bookTitle: string = '';
  @Input() bookAuthor: string = '';
  @Input() bookImage: string = '';
  @Input() bookPrice: number = 0;  // Add price as an input property
  @Input() bookRating: number = 0;  // Add bookRating as an input property

  hover = false;
  fullStars: number[] = [];
  emptyStars: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const full = Math.floor(this.bookRating);
    const empty = 5 - full;
    this.fullStars = Array(full).fill(0);
    this.emptyStars = Array(empty).fill(0);
  }
}


