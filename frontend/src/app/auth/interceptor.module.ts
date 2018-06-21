import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest,
} from '@angular/common/http';
import {HttpResponse,HttpErrorResponse,  HTTP_INTERCEPTORS } from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  constructor( private router: Router) {
    }

 intercept(  req: HttpRequest<any>,  next: HttpHandler ): Observable<HttpEvent<any>> {
   const started = Date.now();
    let ok: string;
  let token =   localStorage.getItem('token');
  const dupReq = req.clone({
   headers: req.headers.set('token', token!=null?token:""),
 });
 return next.handle(dupReq).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse ){
        if (err.status === 401) {
          this.router.navigate(['/']);
        }
      }
    });
 }
}
@NgModule({
providers: [{
  provide: HTTP_INTERCEPTORS,
  useClass: HttpsRequestInterceptor,
  multi: true,
}
,
],
})
export class Interceptor {}
