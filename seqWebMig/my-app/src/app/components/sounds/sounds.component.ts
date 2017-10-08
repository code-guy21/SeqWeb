import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.css']
})
export class SoundsComponent implements OnInit {
  sounds:{
    name:String,
    fileName:String,
    url:String
  }[];
  
  constructor() { }

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
  
  addSound(soundName, fileName){
    var fileName = fileName.replace(/C:\\fakepath\\/i, '');
    this.sounds.unshift({ 
      name: soundName,
      fileName: fileName,
      url: 'https://firebasestorage.googleapis.com/v0/b/sd-project-d3893.appspot.com/o/music%2FBeat%20It.mp3?alt=media&token=d8f3cd59-c594-4290-8445-b424ec6f51a8'
    });
    return false;
  }

  deleteSound(i){
    this.sounds.splice(i, 1);
  }

}

