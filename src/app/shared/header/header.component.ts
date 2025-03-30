import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'bgr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MatToolbar]
})
export class HeaderComponent {
  isLoggedIn = true; // This should come from an auth service

  constructor(private router: Router) {}

  toggleAuth() {
    this.isLoggedIn = !this.isLoggedIn; // Replace with real auth logic
    this.router.navigate([this.isLoggedIn ? '/logout' : '/login']);
  }
}
