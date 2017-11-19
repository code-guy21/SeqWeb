import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {UploadFileService} from '../upload-file.service';
import {FileUpload} from '../fileupload';
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated'
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.css']
})
export class SoundsComponent implements OnInit {

  

  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}
  private userID = firebase.auth().currentUser.uid;

  itemsRef: AngularFireList<any>;
  items$: Observable<String[]>;


  
  constructor(private uploadService: UploadFileService, private db: AngularFireDatabase) {
    this.itemsRef = db.list(`users/${this.userID}/sounds`);
    
    this.items$ = this.itemsRef.valueChanges(['child_added', 'child_removed'])
    
    this.items$.subscribe(
      val => console.log(val)
    )

   }

  ngOnInit() {

  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
  upload(name:string) {
    const file = this.selectedFiles.item(0)
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress,name)
  }

  deleteSound(i){
    
  }

}

