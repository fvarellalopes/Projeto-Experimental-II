
import {RouterModule, Routes} from '@angular/router'


import {LoginComponent} from './login/login.component'
import {AppComponent} from './app.component'
import {ClienteComponent} from './cliente/cliente.component'
import {UsuarioComponent} from './usuario/usuario.component'
import {ChamadoComponent} from './chamado/chamado.component'
import {ListaClientesComponent} from './cliente/listaclientes.component'
import {ListaUsuarioComponent} from './usuario/listaUsuario.component'
import {ListaChamadoComponent} from './chamado/listaChamado.component'
import {editarChamadoComponent} from './chamado/editarChamado.component';


export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'chamado', component: ChamadoComponent},
  {path: 'cliente/:id', component: ClienteComponent},
  {path: 'usuario/:id', component: UsuarioComponent},
  {path: 'listarclientes', component: ListaClientesComponent},
  {path: 'listarUsuario', component: ListaUsuarioComponent},
  {path: 'listarChamado', component: ListaChamadoComponent},
  {path: 'editarChamado/:id', component: editarChamadoComponent},

];
