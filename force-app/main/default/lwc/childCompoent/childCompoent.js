import { LightningElement, api } from "lwc";

export default class ChildCompoent extends LightningElement {
  @api
  message = "This is default value";

  totalSum;

  @api
  handleClick() {
    console.log("This is handleClick");
  }

  @api
  handleChange() {
    console.log("This is handleChange");
  }

  @api
  sum(a, b) {
    this.totalSum = parseInt(a) + parseInt(b);
  }
}