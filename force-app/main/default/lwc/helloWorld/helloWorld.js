import { LightningElement } from "lwc";

export default class HelloWorld extends LightningElement {
  firstName = "Krishna Teja";
  message = "HEY!!!! Salesforce Casts";
  location = "India";

  handleChange(event) {
    if (event.target.name === "firstName") {
      //user is clicked on the firstName input
      this.firstName = event.target.value;
      console.log(this.firstName);
    } else if (event.target.name === "message") {
      //user is clicked on the message input
      this.message = event.target.value;
      console.log(this.message);
    } else if (event.target.name === "location") {
      //user is clicked on the location input
      this.location = event.target.value;
      console.log(this.location);
    }
  }

  constructor() {
    super();
    console.log("HEY!!!!! am in constructor");
  }

  connectedCallback() {
    console.log("HEY!!!!! am in connectedCallback");
  }

  renderedCallback() {
    console.log("HEY!!!!! am in renderedCallback");
  }

  disconnectedCallback() {
    console.log("HEY!!!!! am in disconnectedCallback");
  }

  errorCallback() {
    console.log("HEY!!!!! am in errorCallback");
  }
}
