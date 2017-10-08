import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { FirebaseService } from '../../services/firebase.service'
>>>>>>> global_struct

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit() {
=======
  sounds:any;
  
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getSounds().subscribe(sounds => {
      this.sounds = sounds;
      console.log(sounds);
    })
>>>>>>> global_struct
  }

}
