import { Injectable } from '@angular/core';
import { response } from 'express';
import {HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

// import { Observable, of, Subject } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class FrontendService {

  constructor(private httpclient: HttpClient) { }
  // saveUser(users){
  //   return this.http.post('http://localhost:4200/api/SaveUser/',users)
  //   .map((response: Response) => response.json())
  // }
  // GetUser(){
  //   return this.http.get('http://localhost:4200/api/getUser/')
  //   .map((response: Response) => response.json())
  // }
  // deleteUser(id){
  //   return this.http.post('http://localhost:4200/api/deleteUser/',{'id': id})
  //   .map((response: Response) => response.json())
  // }
}
