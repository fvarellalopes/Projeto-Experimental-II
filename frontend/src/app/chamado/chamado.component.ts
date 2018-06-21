import {Component, OnInit} from "@angular/core"
import { ChamadoService } from './chamado.service';
import { Chamado } from './chamado';
import { Router } from '@angular/router';
import { Cliente } from '../cliente/cliente';
import { Usuario } from '../usuario/usuario';
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
      usuario: Usuario[];

     constructor(
    		private router: Router,
        private chamadoService: ChamadoService
      ) { }

      ngOnInit() {
          this.getClientes();
          this.getSChamado();
          this.getUsuario();
          console.log(this.getSChamado);
      }

      public limparcampos(){

        this.chamado = new Chamado();

      }

      public abrirSucesso(){
         document.getElementById("sucessogravar").style.display = 'block';
      }

      public Fecharsucesso(){
         document.getElementById("sucessogravar").style.display = 'none';
      }

      public errogravar(){
         document.getElementById("errogravar").style.display = 'block';
      }
      public Fecharerro(){
         document.getElementById("errogravar").style.display = 'none';
      }

     public save(){
       this.Fecharsucesso();
       this.Fecharerro();
       this.chamadoService.addChamado(this.chamado)
       .subscribe(res => {
          console.log(res.body)
          this.limparcampos();
          this.abrirSucesso();
        }, err => {
          this.errogravar();
          this.limparcampos()

        }
      );
    }

    getClientes(): void {
          this.chamadoService.getClientes()
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

      getSChamado(): void {
            this.chamadoService.getSChamado()
                .subscribe(
                    schamado => {
                        this.schamado = schamado.body;
                        console.log(schamado);
                    }, //Bind to view
                                err => {
                            // Log errors if any
                            console.log(err);
                        })
        }
        getUsuario(): void {
              this.chamadoService.getUsuario()
                  .subscribe(
                      usuario => {
                          this.usuario = usuario.body;
                          console.log(usuario);
                      }, //Bind to view
                                  err => {
                              // Log errors if any
                              console.log(err);
                          })
          }
}
