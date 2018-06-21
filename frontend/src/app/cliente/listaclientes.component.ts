import { Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import { ClienteService } from './client.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-root',
  templateUrl: 'listaclientes.component.html',
  styleUrls: ['./cliente.Component.css']
})
export class ListaClientesComponent implements OnInit {

  public clientes: Cliente[] = [];

  constructor(
     private router: Router,
     private clienteService: ClienteService
   ) { }

  ngOnInit() {
    this.carregarTodos();
  }

  public carregarTodos(){
      this.clienteService.getcliente()
      .subscribe(res => {
         this.clientes = res.body;
  	   this.mostrarTela();
       }, err => {
         console.log(err);
  	   this.mostrarTela();
       });
    }

    public editar(id){
  	  window.location.href = '/cliente/'+id;
}


public mostrarTela(){
  document.getElementById("listarcliente").style.display = 'block';
  document.getElementById("loading").style.display = 'none';
}

public mudarTela(){
  document.getElementById("listarcliente").style.display = 'none';
  document.getElementById("loading").style.display = 'block';
}
}
