import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  imports: [CommonModule, RouterModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productForm: FormGroup;

  categories = ['Books', 'Stationery', 'Accessories'];
  tags = ['New Arrival', 'Discounted', 'Best Seller'];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [null],
      discountedPrice: [null],
      expirationStart: [''],
      expirationEnd: [''],
      stockQuantity: [null],
      stockStatus: ['In Stock'],
      category: [''],
      tag: ['']
    });
  }

  saveDraft() {
    console.log('Saving to draft...', this.productForm.value);
  }

  publishProduct() {
    console.log('Publishing product...', this.productForm.value);
  }

  browseImage() {
    console.log('Browse image clicked');
  }

  replaceImage() {
    console.log('Replace image clicked');
  }

  addImage() {
    console.log('Add extra image clicked');
  }
}


