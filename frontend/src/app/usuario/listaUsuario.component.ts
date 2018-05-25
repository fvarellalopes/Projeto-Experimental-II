import { Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { PerfilUsuario } from './perfilUsuario';
import { Cliente } from '../cliente/cliente';


@Component({
  selector: 'app-root',
  templateUrl: 'listaUsuario.component.html',
  styleUrls: ['./usuario.Component.css']
})
export class ListaUsuarioComponent  {

  public usuario: Usuario[] = [];
  public cliente = new Cliente();
  public perfilusuario = new PerfilUsuario();

  constructor(
  private router: Router,
  private usuarioService: UsuarioService
 ) { }

   ngOnInit() {
     this.carregarTodos();
   }

  public carregarTodos(){
    this.usuarioService.getUsuario()
    .subscribe(res => {
       this.usuario = res;
       this.teste();
     }, err => {
       console.log(err);
     });


}
  public teste(){
    this.cliente.nome = " ";
    this.perfilusuario.descricao = " ";

    for (var i  = 0; i < this.usuario.length; i++){
        if(  this.usuario[i].cliente == null){
             this.usuario[i].cliente = this.cliente;
        }
        if(  this.usuario[i].perfilUsuario == null){
             this.usuario[i].perfilUsuario = this.perfilusuario
        }
      }
      console.log(this.usuario);

  }


}
