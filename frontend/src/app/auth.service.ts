import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus = false
  constructor(private http: HttpClient) { }

  getUserDetails(email: any, password: any)
  {
    //post these details to API server and return user infor if correct
    return this.http.post('/api/auth.php', {
      email,
      password
    })
  }
}
