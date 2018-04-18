import {Component, OnInit} from "@angular/core"
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.Component.css']
})
export class ClienteComponent implements OnInit{
  public  clientes: Cliente[] =[];
  public nome='';

  constructor(private clienteService: ClienteService) { }

  public ngOnInit() {
    this.carregaTodos();
  }

  public salvarAluno(): void {
    console.log('oi');

    const  cliente = new Cliente();
    cliente.nome = this.nome;

    this.clienteService.addCliente(cliente)
      .subscribe(res => {
        console.log(res);
        this.carregaTodos();
      },
      err => {
        console.log(err);
      });

  }

  public apagarCliente(id: number): void {
    this.clienteService.removeCliente(id)
      .subscribe(res => {
        console.log(res);
        this.carregaTodos();
      },
      err => {
        console.log(err);
      });
  }

  public carregaTodos(): void {
    this.clienteService.loadCliente()
      .subscribe(res => {
        this.clientes = res;
        console.log('foi');
      },
      err => {
        console.log(err);
      });
  }

}
