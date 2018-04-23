import {Component, OnInit} from "@angular/core"
import { ChamadoService } from './chamado.service';
import { Chamado } from './chamado';
import { Router } from '@angular/router';

@Component({
  selector: 'chamado',
  templateUrl: './chamado.component.html',
  styleUrls: ['./chamado.Component.css']
})
export class ChamadoComponent implements OnInit {
  title = 'chamado';
  public chamado = new Chamado();

     constructor(
    		private router: Router,
        private chamadoService: ChamadoService
      ) { }

      ngOnInit() {

      }

    //  public save(){
    //    this.clienteService.addCliente(this.cliente)
    //    .subscribe(res => {
    //       console.log(res)
    //     }, err => {
    //
    //     }
    //   );
    // }
}
