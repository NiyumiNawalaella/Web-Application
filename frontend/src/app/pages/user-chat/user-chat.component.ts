import { Component } from '@angular/core';
import { join } from 'path';
// import { ChatService } from 'src/app/chat.service';


@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css'],
  // providers: [ChatService]
})
export class UserChatComponent {
}

//   user!: String;
//   room!: String;
//   messageText: String;
//   messageArray: Array<{user:string, message:string}> =[];
//   constructor(private _chatSerivce: ChatService) {
//     this._chatSerivce.newUserJoined().subscribe(data => this.messageArray.push(data));



//     this._chatSerivce.userLeftRoom().subscribe(data => this.messageArray.push(data));

// this._chatSerivce.newMessageReceived().subscribe(data => this.messageArray.push(data));

//   }
//   join(){
//       this._chatSerivce.joinRoom({user:this.user, room:this.room});
//     }
//     leave() {
//       this._chatSerivce.leaveRoom({user:this.user, room:this.room});
//     }
//     sendMessage()
//     {
//       this._chatSerivce.sendMessage({user:this.user, room:this.room, message:this.messageText});
//     }
// }
