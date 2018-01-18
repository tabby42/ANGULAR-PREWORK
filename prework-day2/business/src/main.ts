import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //renders the website, allows
//bootstrapping/launching the app

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//render application
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
