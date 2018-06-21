import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Chamado } from './chamado';
import { Cliente } from '../cliente/cliente';
import { Usuario } from '../usuario/usuario';
import { PerfilUsuario } from '../usuario/perfilUsuario';
import { TipoChamado } from './tipoChamado';
import {HttpClient ,HttpResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
 export class ChamadoService {

  constructor(private http: HttpClient) { }

  public chamadosUrl = 'https://chamadin.herokuapp.com/rest/chamados/';


  public addChamado(body: Object): Observable<HttpResponse<Chamado[]>> {
      const bodyString = JSON.stringify(body);
    //  const headers = new Headers({ 'Content-Type': 'application/json' });
    //  const options = new RequestOptions({ headers: headers });

      console.log(body);

      return this.http.post(this.chamadosUrl, body,  {observe: 'response'}) ;
    }


              private handleError(error: Response) {

                console.error(error);

                return Observable.throw(error.json().error || 'Server error');

            }
            getClientes(): Observable<HttpResponse<Cliente[]>> {
                 return this.http.get('https://chamadin.herokuapp.com/rest/clientes/', {observe: 'response'});
            }
            getSChamado(): Observable<HttpResponse<TipoChamado[]>> {
                        return this.http.get('https://chamadin.herokuapp.com/rest/tiposChamado/', {observe: 'response'});
            }
            getUsuario(): Observable<HttpResponse<TipoChamado[]>> {
                          return this.http.get('https://chamadin.herokuapp.com/rest/usuarios/', {observe: 'response'});
            }
            getPerfis(): Observable<HttpResponse<PerfilUsuario[]>> {
                 return this.http.get('https://chamadin.herokuapp.com/rest/perfis/', {observe: 'response'});
            }
             getChamado (): Observable<HttpResponse<Chamado[]>> {
                return this.http.get(this.chamadosUrl, {observe: 'response'});
               }
}
