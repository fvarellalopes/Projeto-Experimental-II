import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Chamado } from './chamado';
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



}
