import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage!: string;

  constructor(private router: Router) { }

  // Method to handle login action
  login(): void {
    // Basic validation for username and password
    if (!this.username || !this.password) {
      this.errorMessage = "Please enter username and password";
      return;
    }

    // Here you can implement authentication logic
    // For simplicity, let's assume successful login redirects to party list
    this.router.navigate(['/party-list']);
  }
}
