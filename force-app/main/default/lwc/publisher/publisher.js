import { LightningElement, wire } from "lwc";
//1.

import { MessageContext, publish } from "lightning/messageService";
import ACCOUNT_MESSAGE_CHANNEL from "@salesforce/messageChannel/AccountMessageChannel__c";

export default class Publisher extends LightningElement {
  //2.
  @wire(MessageContext)
  messageContext;

  handleClick() {
    //3.
    const payload = {
      greeting: "HEY!!! Salesforce Casts"
    };

    //4.
    publish(this.messageContext, ACCOUNT_MESSAGE_CHANNEL, payload);
  }
}
