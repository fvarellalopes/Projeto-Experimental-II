import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ChamadoComponent } from './chamado/chamado.component';
import { ClienteService } from './cliente/client.service';
import { UsuarioService } from './usuario/usuario.service';
import { ChamadoService } from './chamado/chamado.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClienteComponent,
    UsuarioComponent,
    ChamadoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: false }
    ),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [ClienteService,UsuarioService,ChamadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
