import { LightningElement } from "lwc";

export default class EventChildComponent extends LightningElement {
  handleClick() {
    const person = {
      name: "Krishna Teja",
      age: 32,
      location: "India"
    };
    /* 
    
    bubbles : false && composed : false
    bubbles : true && composed : false
    bubbles : true && composed : true
    bubbles : false && composed : true


    */
    this.template.querySelector("p").dispatchEvent(
      new CustomEvent("teja", {
        detail: person,
        bubbles: true,
        composed: true
      })
    );
  }

  handleOnTeja() {
    console.log("HEY!!!!!");
  }
}
