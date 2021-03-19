import { LightningElement } from "lwc";

export default class EventChildComponent extends LightningElement {
  handleClick() {
    this.template.querySelector("p").dispatchEvent(new CustomEvent("teja"));
  }

  handleOnTeja() {
    console.log("HEY!!!!!");
  }
}
