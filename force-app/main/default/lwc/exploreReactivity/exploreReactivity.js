import { LightningElement, track } from "lwc";

export default class ExploreReactivity extends LightningElement {
  message = "HEY!!!";

  //it is valid for object and an array
  @track
  person = {
    name: "Teja",
    age: 32,
    location: "India"
  };

  connectedCallback() {
    console.log("Am in connectedcallback");
  }

  renderedCallback() {
    console.log("Am in redneredcallback");
  }

  handleClick() {
    this.person.name = "Krishna Teja";
  }
}
