import { Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import { ChamadoService } from './chamado.service';
import { Chamado } from './chamado';
import { PerfilUsuario } from '../usuario/perfilUsuario';
import { Cliente } from '../cliente/cliente';


@Component({
  selector: 'app-root',
  templateUrl: 'listaChamado.component.html',
  styleUrls: ['./chamado.Component.css']
})
export class ListaChamadoComponent  {

  public chamado: Chamado[] = [];
  public cliente = new Cliente();
  public perfilusuario = new PerfilUsuario();

  constructor(
  private router: Router,
  private chamadoService: ChamadoService
 ) { }

   ngOnInit() {
     this.carregarTodos();
   }

  public carregarTodos(){
    this.chamadoService.getChamado()
    .subscribe(res => {
       this.chamado = res;
       this.teste();
     }, err => {
       console.log(err);
     });


}
  public teste(){
    this.cliente.nome = " ";
    this.perfilusuario.descricao = " ";

    for (var i  = 0; i < this.chamado.length; i++){
        if(  this.chamado[i].cliente == null){
             this.chamado[i].cliente = this.cliente;
        }
        // if(  this.chamado[i].perfilUsuario == null){
        //      this.chamado[i].perfilUsuario = this.perfilusuario
        // }
      }
      console.log(this.chamado);

  }


}
