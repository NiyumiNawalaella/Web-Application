import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor(private webService: WebRequestService, private router: Router,  private http: HttpClient) { }

  userlogin(email:string, password: string) {
    return this.webService.userlogin(email,password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        //the auth tokens will be in the header of this response
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        console.log("LOGGED IN!");
      })
    )
  }
  private setSession(userId: string, accessToken: any, refreshToken: any) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('access-token', accessToken);
    // JSON.parse(localStorage.getItem('access-token') as string);
    localStorage.setItem('refresh-token', refreshToken);
  }
  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
  }
  logout(){
    this.removeSession();
  }
  getAccessToken(){
    return localStorage.getItem('x-access-item');
  }
  getRefreshToken(){
    return localStorage.getItem('x-refresh-token');
  }
  setAccessToken(accessToken: string) {
    localStorage.setItem('x-access-token', accessToken);
  }
}