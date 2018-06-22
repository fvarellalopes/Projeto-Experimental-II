import { Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import { ChamadoService } from './chamado.service';
import { Chamado } from './chamado';
import { PerfilUsuario } from '../usuario/perfilUsuario';
import { Cliente } from '../cliente/cliente';


@Component({
  selector: 'app-root',
  templateUrl: 'editarChamado.component.html',
  styleUrls: ['./chamado.Component.css']
})
export class editarChamadoComponent  {

  public chamados: Chamado[] = [];
  public chamado = new Chamado();
  public cliente = new Cliente();
  public perfilusuario = new PerfilUsuario();
  public idChamado = 0;

  constructor(
  private router: Router,
  private chamadoService: ChamadoService
 ) { }

   ngOnInit() {
     try {
       this.idChamado = parseInt(this.router.url.split('/')[2]);
       this.carregarEditar();
     } catch (e) {
       window.location.href = '/listarChamado';
     }
   }

  public carregarTodos(){
    this.chamadoService.getChamado()
    .subscribe(res => {
       this.chamado = res.body;
       this.teste();
     }, err => {
       console.log(err);
     });


}
  public teste(){
    this.cliente.nome = " ";
    this.perfilusuario.descricao = " ";

    for (var i  = 0; i < this.chamados.length; i++){
        if(  this.chamados[i].cliente == null){
             this.chamados[i].cliente = this.cliente;
        }
        // if(  this.chamado[i].perfilUsuario == null){
        //      this.chamado[i].perfilUsuario = this.perfilusuario
        // }
      }
      console.log(this.chamados);

  }

  public carregarEditar(){
this.chamadoService.getChamado()
.subscribe(res => {
   this.chamados = res.body;
   this.carregarCampos();
 }, err => {
   console.log(err);
   window.location.href = '/listarChamado';
 });
}

public carregarCampos(){
for (let c of this.chamados) {
  if(c.idChamado == this.idChamado) {
    this.chamado = c;
  }
}
console.log(this.chamado)
}

}
