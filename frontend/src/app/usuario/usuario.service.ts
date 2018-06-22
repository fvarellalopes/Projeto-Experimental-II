import { Injectable } from '@angular/core';
import {  Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usuario } from './usuario';
import { Cliente } from '../cliente/cliente';
import { PerfilUsuario } from './perfilUsuario';

import {HttpClient ,HttpResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public UsuarioUrl = 'https://chamadin.herokuapp.com/rest/usuarios/';


  public addUsuario(body: Object): Observable<HttpResponse<Usuario[]>> {
      const bodyString = JSON.stringify(body);

      console.log(body);

      return this.http.post(this.UsuarioUrl, body, {observe: 'response'});
    }
    getPerfis(): Observable<HttpResponse<PerfilUsuario[]>> {
         // const headers = new Headers({ 'Content-Type': 'application/json'});
         // const options = new RequestOptions({ headers: headers });

         return this.http.get('https://chamadin.herokuapp.com/rest/perfis/', {observe: 'response'});
     }
     getClientes(): Observable<HttpResponse<Cliente[]>> {
          // const headers = new Headers({ 'Content-Type': 'application/json'});
          // const options = new RequestOptions({ headers: headers });

          return this.http.get('https://chamadin.herokuapp.com/rest/clientes/', {observe: 'response'});
      }

      getUsuario (): Observable<HttpResponse<Usuario[]>> {
        return this.http.get(this.UsuarioUrl, {observe: 'response'});
      }


}
