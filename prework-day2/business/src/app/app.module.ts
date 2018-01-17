import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

export const firebaseConfig = {
	apiKey: "AIzaSyDy9a8CdrR-8Td00OjLQv0ppQoW2rGsuE0",
    authDomain: "business-13008.firebaseapp.com",
    databaseURL: "https://business-13008.firebaseio.com",
    projectId: "business-13008",
    storageBucket: "business-13008.appspot.com",
    messagingSenderId: "229848917159"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, 
    AngularFireAuthModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
