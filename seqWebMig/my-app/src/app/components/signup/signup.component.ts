import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {UserUpload} from './userupload';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  router: Router;
  database: AngularFireDatabase;
  userUpload : UserUpload;
  private userID;

  constructor(public route: Router,public af: AngularFireAuth,public db: AngularFireDatabase) {
    this.router = route;
    this.database = db;
    this.userUpload = new UserUpload()
   }

   onSubmit(formData) {

    this.userUpload.email = formData.value.email;
    this.userUpload.name = formData.value.name;
    this.userUpload.username = formData.value.uname;

    this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password)
      .then(success => {
        console.log('Success!', success);
        this.uploadUser(this.userUpload);
      })
      .catch(err => {
        alert("Invalid email or password")
      });
  }

  uploadUser(userinfo){
    this.userID = firebase.auth().currentUser.uid;
    this.db.list(`users/`).set(this.userID,userinfo)
  }

  ngOnInit() {
    this.userUpload.email = "email"
    this.userUpload.name = "name"
    this.userUpload.username = "username"
  }

}
