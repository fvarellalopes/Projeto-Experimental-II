import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';

import { ClienteComponent } from './cliente/cliente.component';

import { UsuarioComponent } from './usuario/usuario.component';

import { ClienteService } from './cliente/client.service';

// import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClienteComponent,
    UsuarioComponent
    // HttpClientModule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
