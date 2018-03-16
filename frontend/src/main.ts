import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LoginModule } from './app/Login/login.module';
import { HomeModule } from './app/home/home.module';
import { ClienteModule } from './app/cliente/cliente.module';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule( LoginModule)
  .catch(err => console.log(err));
