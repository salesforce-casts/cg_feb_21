import { LightningElement, wire } from "lwc";

import {
  MessageContext,
  subscribe,
  unsubscribe
} from "lightning/messageService";

import ACCOUNT_MESSAGE_CHANNEL from "@salesforce/messageChannel/AccountMessageChannel__c";

export default class Subscriber extends LightningElement {
  //2.
  @wire(MessageContext)
  messageContext;

  handleClick() {
    subscribe(this.messageContext, ACCOUNT_MESSAGE_CHANNEL, (message) => {
      this.handleMessage(message);
    });
  }

  handleMessage(message) {
    console.log(message.greeting);
  }
}
