import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
 
import {FileUpload} from '../components/fileupload';
import { AuthService } from '../services/auth.service';
 
@Injectable()
export class UploadFileService {

  constructor(private db: AngularFireDatabase) {}
 
  private basePath = '/music';
  private userID = firebase.auth().currentUser.uid;
  private key;
 
  pushFileToStorage(fileUpload: FileUpload, progress: {percentage: number},nameu: string) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
 
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
      },
      (error) => {
        // fail
        console.log(error)
      },
      () => {
        // success
        fileUpload.soundUrl = uploadTask.snapshot.downloadURL
        fileUpload.name = nameu
        this.saveFileData(fileUpload)
      }
    );

  }
 
  private saveFileData(fileUpload: FileUpload) {
    this.key = this.db.list(`sounds/${this.userID}/`).push(fileUpload).key
    this.db.list(`users/${this.userID}/sounds`).set(this.key,fileUpload.name)
  }
}