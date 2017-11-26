import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  
  private userID = firebase.auth().currentUser.uid;
  user = firebase.auth().currentUser
  router: Router;

  constructor(public af: AngularFireAuth,public route: Router,private db: AngularFireDatabase) { 
    this.router = route;
  }

  changepass(email){
    
    this.af.auth.sendPasswordResetEmail(email)
    .then(() => alert("email sent"))
    .catch((error) => console.log(error))

  }
  changeuser(username){
    console.log(username)

    this.db.object(`users/${this.userID}/username`).set(username)
    .then(() => alert("username changed"))
    .catch((error) => console.log(error))
  }
  changeemail(email){
    console.log(email)
    this.user.updateEmail(email);
    this.db.object(`users/${this.userID}/email`).set(email)
  }

  ngOnInit() {
  }

}
