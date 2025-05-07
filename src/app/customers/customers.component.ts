import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [CommonModule, RouterModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers = [
    { id: 1, name: 'John Doe', orderCount: 12, totalSpent: 1200, status: 'Active' },
    { id: 2, name: 'Jane Smith', orderCount: 5, totalSpent: 450, status: 'Pending' },
    { id: 3, name: 'Mark Lee', orderCount: 8, totalSpent: 800, status: 'Inactive' },
  ];

  deleteCustomer(customer: any) {
    alert(`Delete customer ${customer.name}`);
  }

  messageCustomer(customer: any) {
    alert(`Message customer ${customer.name}`);
  }

}
