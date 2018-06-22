import { Injectable } from '@angular/core';
import {  Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cliente } from './cliente';
import {HttpClient ,HttpResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }

  public clientesUrl = 'https://chamadin.herokuapp.com/rest/clientes/';

  public addCliente(body: Object): Observable<HttpResponse<Cliente[]>> {
    const bodyString = JSON.stringify(body);
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    // const options = new RequestOptions({ headers: headers });

    console.log(body);

    return this.http.post(this.clientesUrl, body, {observe: 'response'});
  }

  getcliente (): Observable<HttpResponse<Cliente[]>> {
    return this.http.get(this.clientesUrl, {observe: 'response'});
  }

  deletecliente (id: number): Observable<HttpResponse<Cliente[]>> {
		const bodyString = JSON.parse('{"id":' + id +'}');
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });

		console.log(bodyString);

    return null;
		// return this.http.delete(this.clientesUrl, bodyString, {observe: 'response'});
	}

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
