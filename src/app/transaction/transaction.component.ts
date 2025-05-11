import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-transaction',
  imports: [CommonModule, RouterModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  transactions = [
    { id: 'C001', name: 'John Doe', date: '2025-05-10', total: '₦45,000', status: 'Completed' },
    { id: 'C002', name: 'Jane Smith', date: '2025-05-09', total: '₦23,000', status: 'Pending' },
    { id: 'C003', name: 'Alice Brown', date: '2025-05-08', total: '₦11,000', status: 'Failed' },
    { id: 'C004', name: 'Bob Martin', date: '2025-05-07', total: '₦67,000', status: 'Completed' }
  ];

}
