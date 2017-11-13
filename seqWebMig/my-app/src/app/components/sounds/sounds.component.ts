import { Component, OnInit } from '@angular/core';

import {UploadFileService} from '../upload-file.service';
import {FileUpload} from '../fileupload';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.css']
})
export class SoundsComponent implements OnInit {

  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}

  sounds:{
    name:String,
    fileName:String,
    url:String
  }[];
  
  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.sounds = [
      { 
        name: 'Bam',
        fileName:'Bam.wav',
        url: 'https://firebasestorage.googleapis.com/v0/b/sd-project-d3893.appspot.com/o/music%2FBeat%20It.mp3?alt=media&token=d8f3cd59-c594-4290-8445-b424ec6f51a8'
      },
      {
        name: 'Bang',
        fileName:'Bang.wav',
        url: 'https://firebasestorage.googleapis.com/v0/b/sd-project-d3893.appspot.com/o/music%2FBeat%20It.mp3?alt=media&token=d8f3cd59-c594-4290-8445-b424ec6f51a8'
      },
      {
        name: 'Boom',
        fileName:'Boom.wav',
        url: 'https://firebasestorage.googleapis.com/v0/b/sd-project-d3893.appspot.com/o/music%2FBeat%20It.mp3?alt=media&token=d8f3cd59-c594-4290-8445-b424ec6f51a8'
      }
    ];
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
    this.sounds.splice(i, 1);
  }

}

