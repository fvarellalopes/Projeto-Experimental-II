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
  public cliente = new Cliente();

     constructor(
    		private router: Router,
        private clienteService: ClienteService
      ) { }

      ngOnInit() {

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
          console.log(res)
          this.limparcampos();
          this.abrirSucesso();
        }, err => {
          this.limparcampos()
        }
      );
    }
}
