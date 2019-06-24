import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

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
