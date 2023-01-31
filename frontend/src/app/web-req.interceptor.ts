import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CredentialsService } from './credentials.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebReqInterceptor implements HttpInterceptor {

  constructor(private credentialsService: CredentialsService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    //Handle the request
    request = this.addCredentialsHeader(request);

    //call next() and handle the response
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);

        if(error.status === 401) {
          //401
        }
        return throwError(error);
      })
    )
  }

  addCredentialsHeader(request: HttpRequest<any>) {
    //get the access token
    const token = this.credentialsService.getAccessToken();

    if(token)
    {
      //append the access token to the request header
      return request.clone({
        setHeaders: {
          'x-access-token': token
        }
      })
    }
    return request;
  }
}
