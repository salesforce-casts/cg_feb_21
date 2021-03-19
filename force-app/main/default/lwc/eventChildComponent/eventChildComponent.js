import { LightningElement } from "lwc";

export default class EventChildComponent extends LightningElement {
  handleClick() {
    const person = {
      name: "Krishna Teja",
      age: 32,
      location: "India"
    };
    /* 
    
    bubbles : false && composed : false - use this
    bubbles : true && composed : false - use this
    bubbles : true && composed : true - very very rarely used 
    bubbles : false && composed : true - doesn’t exist

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
