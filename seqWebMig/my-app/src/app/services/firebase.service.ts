import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
//import { AngularFireAuthModule } from 'angularfire2/auth';
//import { environment} from '../../environments/environment';

@Injectable()
export class FirebaseService {
  sounds: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  getSounds(){
    this.sounds = this.db.list('users').valueChanges() as Observable<Sounds[]>;
    return this.sounds
  }
}

interface Sounds{
  $key?:string;
  name?:string;
  soundUrl?:string;
}
