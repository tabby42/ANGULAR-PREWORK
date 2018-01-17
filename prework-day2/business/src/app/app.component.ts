import { Component } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Business';
  
  items: Observable<any[]>;

  constructor(public af: AngularFireDatabase) {
    this.items = this.af.list('/item').valueChanges();
  	this.items.subscribe((v) => console.log('books: ', v));
  }
}
