import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  constructor(private router: Router) {}

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }


  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
  
}
