import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import {Interceptor} from './auth/interceptor.module';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ChamadoComponent } from './chamado/chamado.component';
import { ClienteService } from './cliente/client.service';
import { UsuarioService } from './usuario/usuario.service';
import { ChamadoService } from './chamado/chamado.service';
import { LoginService } from './login/login.service';
import { MenuComponent } from './menu/menu.component';
import {ListaClientesComponent} from './cliente/listaclientes.component';
import {ListaUsuarioComponent} from './usuario/listaUsuario.component';
import {ListaChamadoComponent} from './chamado/listaChamado.component';
import {editarChamadoComponent} from './chamado/editarChamado.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    UsuarioComponent,
    LoginComponent,
    ChamadoComponent,
    MenuComponent,
    ListaClientesComponent,
    ListaUsuarioComponent,
    ListaChamadoComponent,
    editarChamadoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    Interceptor,
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: false }
    ),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [  ClienteService,UsuarioService,ChamadoService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
