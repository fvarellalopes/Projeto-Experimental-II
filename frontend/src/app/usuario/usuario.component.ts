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
  public usuarios : Usuario[] = [];
  perfis: PerfilUsuario[];
  clientes: Cliente[];
  public idUsuario = 0;

     constructor(
    		private router: Router,
        private usuarioService: UsuarioService
      ) { }

      ngOnInit() {
        this.getPerfis();
        this.getClientes();
        console.log(this.perfis);
        try {
          this.idUsuario = parseInt(this.router.url.split('/')[2]);
          this.carregarEditar();
        } catch (e) {
          window.location.href = '/listarChamado';
      }
}

    public limparcampos(){

        this.usuario = new Usuario();

      }

      public abrirSucesso(){
         document.getElementById("sucessogravar").style.display = 'block';
      }

      public Fecharsucesso(){
         document.getElementById("sucessogravar").style.display = 'none';
      }


     public save(){
       this.Fecharsucesso();
       console.log(<HTMLElement>document.getElementById('cliente'))
      this.usuarioService.addUsuario(this.usuario)
       .subscribe(res => {
          console.log(res.body)
          this.limparcampos();
          this.abrirSucesso();
        }, err => {
          this.limparcampos()

        }
      );
    }
      getPerfis(): void {
            this.usuarioService.getPerfis()
                .subscribe(
                    perfis => {
                        this.perfis = perfis.body;
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
                          this.clientes = clientes.body;
                          console.log(clientes);
                      }, //Bind to view
                                  err => {
                              // Log errors if any
                              console.log(err);
                          })
          }
          public carregarEditar(){
        this.usuarioService.getUsuario()
        .subscribe(res => {
           this.usuarios = res.body;
           this.carregarCampos();
         }, err => {
           console.log(err);
           window.location.href = '/listarChamado';
         });
      }

      public carregarCampos(){
        for (let u of this.usuarios) {
          if(u.idUsuario == this.idUsuario) {
            this.usuario = u;
          }
        }
      }

}
