import { Component, OnInit } from '@angular/core';
//import navbar and hero section
import {NavbarComponent} from './navbar/navbar.component';
import {HeroComponent} from './hero/hero.component';
//make jquery usable 
declare var jquery:any;
declare var $:any;


//decorator plus class = Component
@Component({
  //metadata for component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string = 'My First Angular App';
    public ngOnInit()
	  {
	    $(document).ready(function(){
	        console.log("ready");
	    });
	  }
  
}
