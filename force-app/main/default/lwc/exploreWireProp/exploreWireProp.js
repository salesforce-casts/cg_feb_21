import { LightningElement, wire } from "lwc";

import fetchRecords from "@salesforce/apex/ExploreWireController.fetchRecords";
import getUsername from "@salesforce/apex/ExploreWireController.getUsername";
import processAccounts from "@salesforce/apex/ExploreWireController.processAccounts";

export default class ExploreWireProp extends LightningElement {
  @wire(fetchRecords)
  accounts;

  @wire(getUsername)
  username({ error, data }) {
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  }

  handleClick() {
    processAccounts()
    .then( (data) => {console.log(data);} )
    .catch( (error) => {console.log(error);} );
  }
}
