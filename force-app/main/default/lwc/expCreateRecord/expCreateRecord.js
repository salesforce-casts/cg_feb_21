import { LightningElement } from "lwc";

//1. Import all the dependencies
import { createRecord } from "lightning/uiRecordApi";

import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import ACCOUNT_INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";

export default class ExpCreateRecord extends LightningElement {
  //2 Invoke the method by passing all the params

  nameProp;
  industryProp;

  handleChange(event) {
    if (event.target.name === "name") {
      this.nameProp = event.target.value;
    } else {
      this.industryProp = event.target.value;
    }
  }

  handleClick() {
    const fields = {};

    fields[ACCOUNT_NAME_FIELD.fieldApiName] = this.nameProp;
    fields[ACCOUNT_INDUSTRY_FIELD.fieldApiName] = this.industryProp;

    //3. Create a config object that has info about object and fields
    const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };

    //4. Invoking the createRecord method to insert a record
    createRecord(recordInput)
      .then((account) => {
        console.dir(account);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  }
}
