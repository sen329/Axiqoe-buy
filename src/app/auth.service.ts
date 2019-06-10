import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';


@Injectable()
export class AuthService {

  baseUrl = environment.baseUrl;
  loginUrl = `https://api-pricing.axiqoe.com/buy/login`;
  registerUrl = `https://api-pricing.axiqoe.com/buy/register`;
  token = localStorage.token;
  httpOptions;

  constructor(private http: HttpClient, 
              private router: Router,
              public jwtHelper: JwtHelperService) { }

  data: any = {};

  getHeader() {
    return {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('token')
    })};
  };

  getHeaderForFile() {
    return {headers: new HttpHeaders({
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Authorization': 'Bearer '+ localStorage.getItem('token')
    })};
  };

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(body) {
      this.http.post(this.loginUrl, body, this.getHeader()).subscribe(
        res => {
          this.data = res;
          let name = JSON.parse(atob(this.data.token.split('.')[1])).name;
          localStorage.setItem('token',this.data.token);
          localStorage.setItem('id', this.data.id);
          localStorage.setItem('name', this.data.name);
          this.router.navigate(['/listofapproval']);
        });
  }

  register(body) {
  this.http.post(this.registerUrl, body, this.getHeader()).subscribe(
    res => {
      alert('Register success');
      this.router.navigate(['/login']);
  },
    err=>{
      let error = err.error;
      alert(error);
    }
  );
}

logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('name')
  this.router.navigate(['/login']);
}

}