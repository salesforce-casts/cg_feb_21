import { LightningElement, wire, api } from "lwc";

import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import RATING_FIELD from "@salesforce/schema/Account.Rating";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";

const fields = [NAME_FIELD, RATING_FIELD, INDUSTRY_FIELD];

let superStar = "rajiniKanth";

export default class ExploreGetRecord extends LightningElement {
  @api
  recordId;

  @wire(getRecord, { recordId: "$recordId", fields: fields })
  accountRecord({ error, data }) {
    //data is equal to account.data
    if (data) {
      console.log(superStar);
      this.name = data.fields.Name.value;
      this.rating = data.fields.Rating.value;
      this.industry = data.fields.Industry.value;
    } else if (error) {
      console.log(error);
    }
  }

  handleClick() {}
}
