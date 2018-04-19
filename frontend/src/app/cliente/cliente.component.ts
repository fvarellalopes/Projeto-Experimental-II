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

     public save(){
       this.clienteService.addCliente(this.cliente)
       .subscribe(res => {
          console.log(res)
        }, err => {

        }
      );
    }
}
