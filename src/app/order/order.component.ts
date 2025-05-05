import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [CommonModule, RouterModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  orders = [
    { id: 1, productName: 'Product 1', date: '2025-05-01', price: 100, payment: 'Completed', status: 'completed' },
    { id: 2, productName: 'Product 2', date: '2025-05-02', price: 150, payment: 'Pending', status: 'pending' },
    { id: 3, productName: 'Product 3', date: '2025-05-03', price: 200, payment: 'Completed', status: 'completed' },
    { id: 4, productName: 'Product 4', date: '2025-05-04', price: 120, payment: 'Cancelled', status: 'cancelled' },
    { id: 5, productName: 'Product 5', date: '2025-05-05', price: 120, payment: 'Cancelled', status: 'cancelled' },
    { id: 6, productName: 'Product 6', date: '2025-05-06', price: 200, payment: 'Completed', status: 'completed' },
  ];

  filteredOrders = [...this.orders]; 

  
  selectedFilter: string = 'all';

 
  setFilter(filter: string) {
    this.selectedFilter = filter;
    this.filterOrders();
  }

  filterOrders() {
    if (this.selectedFilter === 'all') {
      this.filteredOrders = [...this.orders]; 
    } else {
      this.filteredOrders = this.orders.filter(order => order.status === this.selectedFilter); // Filter based on status
    }
  }
}