import {Component, OnInit} from "@angular/core"
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { PerfilUsuario } from './perfilUsuario';
import { Observable } from 'rxjs/Observable';
import { Cliente } from '../cliente/cliente';

import { Router } from '@angular/router';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.Component.css']
})
export class UsuarioComponent implements OnInit {
  title = 'usuario';

  public usuario = new Usuario();
  perfis: PerfilUsuario[];
  clientes: Cliente[];

     constructor(
    		private router: Router,
        private usuarioService: UsuarioService
      ) { }

      ngOnInit() {
        this.getPerfis();
        this.getClientes();
        console.log(this.perfis);
      }

     public save(){
       console.log(<HTMLElement>document.getElementById('cliente'))
      this.usuarioService.addUsuario(this.usuario)
       .subscribe(res => {
          console.log(res)
        }, err => {

        }
      );
    }
      getPerfis(): void {
            this.usuarioService.getPerfis()
                .subscribe(
                    perfis => {
                        this.perfis = perfis;
                        console.log(perfis);
                    }, //Bind to view
                                err => {
                            // Log errors if any
                            console.log(err);
                        })
        }
        getClientes(): void {
              this.usuarioService.getClientes()
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

}
