import {Component, OnInit} from "@angular/core"
import { ClienteService } from './client.service';
import { Cliente } from './cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.Component.css']
})
export class ClienteComponent implements OnInit {
    title = 'cliente';
   public clientes : Cliente[] = [];
   public cliente = new Cliente();
   public idCliente = 0;

     constructor(
    		private router: Router,
        private clienteService: ClienteService
      ) { }

      ngOnInit() {
        try {
          this.idCliente = parseInt(this.router.url.split('/')[2]);
          this.carregarEditar();
        } catch (e) {
          window.location.href = '/listarChamado';
    }
      }

      public limparcampos(){

        this.cliente = new Cliente();

      }

      public abrirSucesso(){
         document.getElementById("sucessogravar").style.display = 'block';
      }

      public Fecharsucesso(){
         document.getElementById("sucessogravar").style.display = 'none';
      }


      public save(){
        this.Fecharsucesso();
       this.clienteService.addCliente(this.cliente)
       .subscribe(res => {
          console.log(res.body)
          this.limparcampos();
          this.abrirSucesso();
        }, err => {
          this.limparcampos()
        }
      );
    }

    public carregarEditar(){
  this.clienteService.getcliente()
  .subscribe(res => {
     this.clientes = res.body;
     this.carregarCampos();
   }, err => {
     console.log(err);
     window.location.href = '/listarChamado';
   });
}

public carregarCampos(){
  for (let c of this.clientes) {
    if(c.idCliente == this.idCliente) {
      this.cliente = c;
    }
  }
}
public mostrarTela(){
    document.getElementById("mercado").style.display = 'block';
    document.getElementById("loading").style.display = 'none';
  }
}
