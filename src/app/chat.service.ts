import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  serverURL:string="http://localhost:3000";
  socket;
  constructor() {
    this.socket=io(this.serverURL);
   }
   sendMessage(message:string){
    this.socket.emit("newmessage",message);
   }
}
