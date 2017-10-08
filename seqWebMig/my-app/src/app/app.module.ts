import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SoundsComponent } from './components/sounds/sounds.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'apps', component:AppComponent},
  {path:'sound', component:SoundsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SoundsComponent,
    HomeComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
