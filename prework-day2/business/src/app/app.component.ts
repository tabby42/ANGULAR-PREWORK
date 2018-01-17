import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from './services/firebase.services';
import { Business } from './services/firebase.services';
import { Category } from './services/firebase.services';

//make jquery usable 
declare var jquery:any;
declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit{
  title = 'Business';
  
  //items: Observable<any[]>;
  businesses: Business[];
  categories: Category[];

  appState: string;
  activeKey: string;

  constructor(private _firebaseService: FirebaseService) {
    //this.items = this.af.list('/item').valueChanges();
  	//this.items.subscribe((v) => console.log('books: ', v));
  }

   ngOnInit() {
   	   this._firebaseService.getBusinesses().valueChanges().subscribe(businesses => {
	     this.businesses = businesses;
	   });
	   this._firebaseService.getCategories().valueChanges().subscribe(categories => {
	     this.categories = categories;
	   });
   }
   
   //manage which parts of the HTML should be displayed depending on their state
   changeState(state, key = null) {
	   if(key) {
	     this.activeKey = key;
	   }
	   this.appState = state;
	 }
}
