import { Component, OnInit } from '@angular/core';
//import navbar
import {NavbarComponent} from './navbar/navbar.component';
import {HeroComponent} from './hero/hero.component';

declare var jquery:any;
declare var $:any;

@Component({
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
