import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usuario } from './usuario';
import { Cliente } from '../cliente/cliente';
import { PerfilUsuario } from './perfilUsuario';

import { HttpClientModule } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  public UsuarioUrl = 'https://chamadin.herokuapp.com/rest/usuarios/';


  public addUsuario(body: Object): Observable<Usuario[]> {
      const bodyString = JSON.stringify(body);
      const headers = new Headers({ 'Content-Type': 'application/json'});
      const options = new RequestOptions({ headers: headers });

      console.log(body);

      return this.http.post(this.UsuarioUrl, body, options)
        .map((res: Response) => res.json());
    }
    getPerfis(): Observable<PerfilUsuario[]> {
         const headers = new Headers({ 'Content-Type': 'application/json'});
         const options = new RequestOptions({ headers: headers });

         return this.http.get('https://chamadin.herokuapp.com/rest/perfis/')
             .map((response:Response) => response.json());
     }
     getClientes(): Observable<Cliente[]> {
          const headers = new Headers({ 'Content-Type': 'application/json'});
          const options = new RequestOptions({ headers: headers });

          return this.http.get('https://chamadin.herokuapp.com/rest/clientes/')
              .map((response:Response) => response.json());
      }


}
