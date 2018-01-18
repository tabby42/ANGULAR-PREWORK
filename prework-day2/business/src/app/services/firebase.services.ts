import {Injectable} from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseService {
  businesses: AngularFireList<Business>;
  categories: AngularFireList<Category>;

  //In the constructor we inject the AngularFireDatabase with a reference of af 
  //injection or dependency injection creates a Angular Module which we can use 
  //to instantiate components, perform dependency injection and so on. 
  //It functions similarly as having an instance of a Class
  constructor(private af: AngularFireDatabase) {
     
   }

   // getBusinesses(category: string = null) {
   //     this.businesses = this.af.list('/businesses') as AngularFireList<Business>;
   //     return this.businesses;
   // }

   getBusinesses(category: string = null) {
       if (category != null) {
           this.businesses = this.af.list('/businesses', 
           	ref => ref.orderByChild('category').equalTo(category)) as AngularFireList<Business>;
       } else {
           this.businesses = this.af.list('/businesses') as AngularFireList<Business>;
           console.log('getBusinesses' + this.businesses);
       }
       return this.businesses;
   }

   getCategories() {
       this.categories = this.af.list('/categories') as AngularFireList<Category>;
       return this.categories ;
   }

   addBusiness(newBusiness) {
       return this.businesses.push(newBusiness);
   }

   deleteBusiness(key) {
   	   return this.businesses.remove(key);
   }

}

export interface Business {
   $key?: string;
   company?: string; // ? means optional
   description?: string;
   category: string;
   years_in_business?: number;
   street_address?: string;
   city?: string;
   state?: string;
   zipcode?: string;
   phone?: string;
   email?: string;
   created_at: string;
}

export interface Category {
   $key?: string;
   name?: string;
}