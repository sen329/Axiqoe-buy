import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {};
    constructor(private auth: AuthService, private router: Router) { }

      ngOnInit() {
    }

    login() {
      this.auth.login(this.user);
    }

}
