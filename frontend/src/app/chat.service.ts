// import { Injectable } from '@angular/core';
// import { io }   from 'socket.io-client';
// import { Observable, Observable } from 'rxjs/Observable';
// import { observable, observable } from 'rxjs';
// import { stringify } from 'querystring';

// @Injectable({
//   providedIn: 'root'
// })
// export class ChatService {

//   constructor() { }

//   private socket= io('http://localhost:4200');

//   joinRoom(data: { user: String; room: String; })
//   {
//     this.socket.emit('join', data);
//   }

//   newUserJoined()
//   {
//     let Observable = new Observable<{user:string, message:string}>(observer => {
//       this.socket.on('new user Joined',(data)=> {
//         observer.next(data);
//       })
//       return () => {this.socket.disconnect();}
//     });

//     return observable;
//   }

//   leaveRoom(data) {
//     this.socket.emit('leave', data);
//   }

//   userLeftRoom(){
//     let observable = new Observable<{user:stringify, message:string}>(observable=> {
//       this.socket.on('new message', (data)=> {
//         observer.next(data);

//       });
//       return () => {this.socket.disconnect();}
//     });
//     return observable;
//   }
//   sendMessage(data)
//   {
//     this.socket.emit('message', data);
//   }

//   newMessageReceived(){

//   }
// }
