import {Component, OnInit} from "@angular/core"
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.Component.css']
})
export class UsuarioComponent implements OnInit {
  title = 'usuario';

  public usuario = new Usuario();

     constructor(
    		private router: Router,
        private usuarioService: UsuarioService
      ) { }

      ngOnInit() {

      }

     public save(){
       this.usuarioService.addUsuario(this.usuario)
       .subscribe(res => {
          console.log(res)
        }, err => {

        }
      );
    }


}
