import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cliente } from './cliente';
import { HttpClientModule } from '@angular/common/http';


@Injectable()
export class ClienteService {

  constructor(private http: Http) { }

  // public cadastrarCliente (cliente: Cliente): Observable<any> {
  // return this.http.put('https://chamadin.herokuapp.com/post/clientes/', cliente).pipe(
  //   tap(_ => this.log(`updated hero id=${cliente.id}`)),
  //   catchError(this.handleError<any>('updateHero'))
  //       );
  //   }

  public clientesUrl = 'https://chamadin.herokuapp.com/clientes/';


  public addCliente(body: Object): Observable<Cliente[]> {

    // public clientesUrl = 'https://chamadin.herokuapp.com/clientes/';

      const bodyString = JSON.stringify(body);
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });

      return this.http.post(this.clientesUrl, body, options)
        .map((res: Response) => res.json());
    }

}
