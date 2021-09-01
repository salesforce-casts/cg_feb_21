import { LightningElement } from "lwc";
// Import all the dependencies
import { createRecord } from "lightning/uiRecordApi";

import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
export default class ExploreCustomValidations extends LightningElement {
  nameProp;
  industryProp;

  handleChange(event) {
    if (event.target.name === "name") {
      let name = this.template.querySelector(".name");
      // let nameVal = name.value;
      this.nameProp = name.value;

      if (!this.nameProp) {
        name.setCustomValidity("Please Enter the Name");
      } else {
        name.setCustomValidity("");
      }
      name.reportValidity();
    } else if (event.target.name === "industry") {
      let industry = this.template.querySelector(".industry");
      let industryVal = industry.value;
      this.industryProp = industry.value;

      if (!industryVal) {
        industry.setCustomValidity("Please Enter the Industry");
      } else {
        industry.setCustomValidity("");
      }
      industry.reportValidity();
    }
  }

  handleClick(event) {
    console.log("AM HERE");

    const fields = {};

    fields[NAME_FIELD.fieldApiName] = this.nameProp;
    fields[INDUSTRY_FIELD.fieldApiName] = this.industryProp;

    const recordInput = {
      apiName: ACCOUNT_OBJECT.objectApiName,
      fields
    };

    // Invoke the method createRecord()
    createRecord(recordInput)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
