import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Axiqoe-buy';
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  
  get isLoggedIn() {
    return !!this.authService.isAuthenticated();
  }

  get name(){
    return localStorage.getItem('name');
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
