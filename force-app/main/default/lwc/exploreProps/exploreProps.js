import { LightningElement } from "lwc";

export default class ExploreProps extends LightningElement {
  message;

  handleClick() {
    this.message = "HEY!!!!" + Date.now();
  }

  renderedCallback() {
    console.log("Am getting modified everytime" + Date.now());
  }
}
