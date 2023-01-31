import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebReqInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    //Handle the request
    request = this.addCredentialsHeader(request);
  }

  addCredentialsHeader(request: HttpRequest<any>) {
    //get the access token

    //append the access token to the request header
  }
}
