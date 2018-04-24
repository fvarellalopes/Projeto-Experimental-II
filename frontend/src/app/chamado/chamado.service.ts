import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Chamado } from './chamado';
import { Cliente } from '../cliente/cliente';
import { Usuario } from '../usuario/usuario';
import { TipoChamado } from './tipoChamado';
import { HttpClientModule } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
 export class ChamadoService {

  constructor(private http: Http) { }

  public chamadosUrl = 'https://chamadin.herokuapp.com/rest/chamados/';


  public addChamado(body: Object): Observable<Chamado[]> {
      const bodyString = JSON.stringify(body);
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });

      console.log(body);

      return this.http.post(this.chamadosUrl, body, options)
        .map((res: Response) => res.json());
    }


              private handleError(error: Response) {

                console.error(error);

                return Observable.throw(error.json().error || 'Server error');

            }
            getClientes(): Observable<Cliente[]> {
                 const headers = new Headers({ 'Content-Type': 'application/json'});
                 const options = new RequestOptions({ headers: headers });

                 return this.http.get('https://chamadin.herokuapp.com/rest/clientes/')
                     .map((response:Response) => response.json());

                   }

            getSChamado(): Observable<TipoChamado[]> {
                        const headers = new Headers({ 'Content-Type': 'application/json'});
                        const options = new RequestOptions({ headers: headers });

                        return this.http.get('https://chamadin.herokuapp.com/rest/tiposChamado/')
                            .map((response:Response) => response.json());
                    }
            getUsuario(): Observable<TipoChamado[]> {
                        const headers = new Headers({ 'Content-Type': 'application/json'});
                        const options = new RequestOptions({ headers: headers });

                          return this.http.get('https://chamadin.herokuapp.com/rest/usuarios/')
                                    .map((response:Response) => response.json());
                              }
}
