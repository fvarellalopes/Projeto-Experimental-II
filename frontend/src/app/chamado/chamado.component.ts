import {Component, OnInit} from "@angular/core"
import { ChamadoService } from './chamado.service';
import { Chamado } from './chamado';
import { Router } from '@angular/router';
import { Cliente } from '../cliente/cliente';
import { TipoChamado } from './tipoChamado';

@Component({
  selector: 'chamado',
  templateUrl: './chamado.component.html',
  styleUrls: ['./chamado.Component.css']
})
export class ChamadoComponent implements OnInit {
  title = 'chamado';
  public chamado = new Chamado();
      clientes: Cliente[];
      schamado: TipoChamado[];

     constructor(
    		private router: Router,
        private chamadoService: ChamadoService
      ) { }

      ngOnInit() {
          this.getClientes();
          this.getSChamado();
          console.log(this.getSChamado);
      }

     public save(){
       this.chamadoService.addChamado(this.chamado)
       .subscribe(res => {
          console.log(res)
        }, err => {

        }
      );
    }

    getClientes(): void {
          this.chamadoService.getClientes()
              .subscribe(
                  clientes => {
                      this.clientes = clientes;
                      console.log(clientes);
                  }, //Bind to view
                              err => {
                          // Log errors if any
                          console.log(err);
                      })
      }

      getSChamado(): void {
            this.chamadoService.getSChamado()
                .subscribe(
                    schamado => {
                        this.schamado = schamado;
                        console.log(schamado);
                    }, //Bind to view
                                err => {
                            // Log errors if any
                            console.log(err);
                        })
        }
}
