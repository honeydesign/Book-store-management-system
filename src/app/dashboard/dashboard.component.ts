import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements AfterViewInit {

  products = [
    { name: 'Book 1', stock: 20, price: 15.99, sales: 50 },
    { name: 'Book 2', stock: 35, price: 22.50, sales: 80 },
    { name: 'Book 3', stock: 10, price: 9.99, sales: 30 },
  ];

  ngAfterViewInit() {
    const ctx = document.getElementById('weeklyReportChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line', // Changed to 'line' for line graph
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 9], // Example sales data for the week
          borderColor: '#D41414',
          backgroundColor: 'rgba(255, 9, 9, 0.2)', // Light green background for the graph
          tension: 0.3, // Slight curve to the line
          fill: true, // Fill the area under the line
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 50, // Set the max value for the y-axis (number of customers, for example)
          },
        },
      }
    });
  }
}