import { Injectable } from '@angular/core';
import {  Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usuario } from '../usuario/usuario';

import {HttpClient ,HttpResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  public UsuarioUrl = 'https://chamadin.herokuapp.com/rest/usuarios/login';


  public login(body: Object): Observable<HttpResponse<any>> {
      const bodyString = JSON.stringify(body);

      console.log(body);

      return this.http.post(this.UsuarioUrl, body, {observe: 'response'});
    }
}
