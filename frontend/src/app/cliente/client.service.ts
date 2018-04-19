import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cliente } from './cliente';
import { HttpClientModule } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ClienteService {

  constructor(private http: Http) { }

  public clientesUrl = 'https://chamadin.herokuapp.com/rest/clientes/';


  public addCliente(body: Object): Observable<Cliente[]> {
      const bodyString = JSON.stringify(body);
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });

      console.log(body);

      return this.http.post(this.clientesUrl, body, options)
        .map((res: Response) => res.json());
    }

            getcliente (): Observable<Cliente[]> {

            return this.http.get(this.clientesUrl)
            .map((res: Response) => res.json());



              }


              private handleError(error: Response) {

                console.error(error);

                return Observable.throw(error.json().error || 'Server error');

            }



}
