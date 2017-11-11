import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  sounds:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getSounds().subscribe(sounds => {
      this.sounds = sounds;
      console.log(sounds);
    })
  }

}
