import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggInn = true;
  userID;
  itemsRef: AngularFireObject<any>;
  items: Observable<{ username: String }>;
  variable;
  currentUser: string;

  constructor(public authService: AuthService,public auth: AngularFireAuth,private db: AngularFireDatabase) {
    this.currentUser = "Settings"

    auth.auth.onAuthStateChanged((user) => {
     if (user != null) {
      
       this.currentUser = user.displayName;

        // etc.
        } else {
      // User is not logged in, redirect to where you need to.
         }
      });

   }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
