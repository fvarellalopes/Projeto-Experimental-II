import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Cliente } from './cliente';

@Injectable()
export class ClienteService {

  private clientesUrl = 'http://localhost:4200/cliente';

  constructor(private http: Http) { }

  public addCliente(body: Object): Observable<Cliente[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.clientesUrl, body, options)
      .map((res: Response) => res.json());
  }

  public updateCliente(body: Object): Observable<Cliente[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.clientesUrl}/${body['id']}`, body, options)
      .map((res: Response) => res.json());

  }

  public removeCliente(id: number): Observable<Cliente[]> {
    return this.http.delete(`${this.clientesUrl}/${id}`)
      .map((res: Response) => res.json());
  }

  public loadCliente(): Observable<Cliente[]> {
    return this.http.get(`${this.clientesUrl}`)
      .map((res: Response) => res.json());
  }

}
