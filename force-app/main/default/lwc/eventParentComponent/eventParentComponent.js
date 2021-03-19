import { LightningElement } from "lwc";

export default class EventParentComponent extends LightningElement {
  handleParentOnTeja(event) {
    console.log(event.detail.name);
    console.log(event.detail.age);
    console.log(event.detail.location);
    console.log("HEY Am from parent");
  }
}
