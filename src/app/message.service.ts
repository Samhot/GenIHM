import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  addMessage(message: string) {
    this.messages.push(message);
  }

  clearMessage() {
    this.messages = [];
  }
}
