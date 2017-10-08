import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggInn = true;
  constructor(public authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
