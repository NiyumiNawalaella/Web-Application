import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { ChatMessageDto } from '../models/chatMessageDto';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

//   constructor(public webSocketService: WebSocketService) {}

  ngOnInit() {
    // this.webSocketService.openWebSocket();
  }
}
//   ngOnDestroy(): void {
//     this.webSocketService.closeWebSocket();
//   }

//   sendMessage(sendForm: NgForm){
//     const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
//     this.webSocketService.sendMessage(chatMessageDto);
//     sendForm.controls['message'].reset()
//   }
// }
