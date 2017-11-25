import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule,  } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment} from '../environments/environment';
import { FirebaseService} from './services/firebase.service';
import { AuthService } from './services/auth.service';


import { AppComponent } from './app.component';
import { SoundsComponent } from './components/sounds/sounds.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import {UploadFileService} from '../app/components/upload-file.service';
import { FormsModule }   from '@angular/forms';
import { SettingsComponent } from './components/settings/settings.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'apps', component:AppComponent},
  {path:'sound', component:SoundsComponent},
  {path:'login', component:LoginComponent},
  {path:'test', component:TestComponent},
  {path:'signup', component:SignupComponent},
  {path:'settings', component:SettingsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SoundsComponent,
    HomeComponent,
    FooterComponent,
    TestComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FirebaseService,
    UploadFileService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
