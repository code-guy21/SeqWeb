import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService,public auth: AngularFireAuth,public route: Router) {

    this.auth.auth.onAuthStateChanged(function(user) {
      
      if (user) {
        route.navigate(['/']);
      } else {
        route.navigate(['/login']);
      }
    });
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login(email, password) {
    this.authService.login(email, password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
