
import {RouterModule, Routes} from '@angular/router'


import {LoginComponent} from './login/login.component'
import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.component'
import {ClienteComponent} from './cliente/cliente.component'
import {UsuarioComponent} from './usuario/usuario.component'
import {ChamadoComponent} from './chamado/chamado.component'
import {ListaClientesComponent} from './cliente/listaclientes.component'
import {ListaUsuarioComponent} from './usuario/listaUsuario.component'


export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'chamado', component: ChamadoComponent},
  {path: 'listarclientes', component: ListaClientesComponent},
  {path: 'listarUsuario', component: ListaUsuarioComponent},

];
