import { LightningElement } from "lwc";

import accountRecords from "@salesforce/apex/ExploreAccountController.getRecords";

export default class ExploreImplicitApex extends LightningElement {
  handleClick() {
    accountRecords()
      .then((result) => {
        console.log(result);
      })
      .catch();
  }
}
