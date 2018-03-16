
import {RouterModule, Routes} from '@angular/router'


import {LoginComponent} from './login/login.component'
import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.component'
import {ClienteComponent} from './cliente/cliente.component'



export const ROUTES: Routes = [
  {path: 'get', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cliente', component: ClienteComponent},

];
