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
     }, err => {
       console.log(err);
     });
  }

  // public deletarCliente(id){
  //   this.clienteService.deletecliente(id)
  //   .subscribe(res => {
  //      console.log(id);
  //    }, err => {
  //      console.log(err);
  //    });
  // }
}
