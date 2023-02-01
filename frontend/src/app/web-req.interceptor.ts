import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, observable, Observable, Subject, throwError } from 'rxjs';
import { CredentialsService } from './credentials.service';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebReqInterceptor implements HttpInterceptor {

  constructor(private credentialsService: CredentialsService) { }

  refreshingAccessToken: boolean = false;

  accessTokenRefreshed: Subject<any> = new Subject();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    //Handle the request
    request = this.addCredentialsHeader(request);

    //call next() and handle the response
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);

        if(error.status === 401) {
          //401 error so it is unauthorized

          //refresh the access token
          return this.refreshAccessToken()
          .pipe(
            switchMap(() => {
              request = this.addCredentialsHeader(request);
              return next.handle(request);
            }),
            catchError((err: any) => {
              console.log(err);
              this.credentialsService.logout();
              return empty();
            })
          )
        }
        return throwError(() => error);
      })
    )
  }
  refreshAccessToken(){

    if(this.refreshingAccessToken)
    {
      return new Observable(observer => {
        this.accessTokenRefreshed.subscribe(()=> {
          //this code will run when the access token has been refreshed
          observer.next();
          observer.complete();
        })
      })
    }
    else
    {
      this.refreshingAccessToken = true;
    //we want to call a method in the credentials service to send a request to refresh the access token
    return this.credentialsService.getNewAccessToken().pipe(
      //tap would just observe the response
      tap(() => {
        this.refreshingAccessToken = false;
        console.log("Access Token Refreshed!");
      })
    )
    }
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
