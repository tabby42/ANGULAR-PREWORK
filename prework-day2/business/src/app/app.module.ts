import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';

export const firebaseConfig = {
	apiKey: "AIzaSyDy9a8CdrR-8Td00OjLQv0ppQoW2rGsuE0",
    authDomain: "business-13008.firebaseapp.com",
    databaseURL: "https://business-13008.firebaseio.com",
    projectId: "business-13008",
    storageBucket: "business-13008.appspot.com",
    messagingSenderId: "229848917159"
}

//root module AppModule -> needed to launch application
//Decorator function NgModule provides metadata for AppModule
//decorator plus class = component
@NgModule({
  //list of all components inside this module
  declarations: [
    AppComponent
  ],
  //specify dependencies
  imports: [
    BrowserModule, //loads required dependencies to launch app in browser
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, 
    AngularFireAuthModule, 
    FormsModule
  ],
  providers: [],
  //root component
  bootstrap: [AppComponent]
})
export class AppModule { }
