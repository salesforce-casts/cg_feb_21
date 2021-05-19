import { api, LightningElement, wire } from "lwc";

//1.
import { getRecord, getFieldValue } from "lightning/uiRecordApi";

import NAME_FIELD from "@salesforce/schema/Account.Name";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import RATING_FIELD from "@salesforce/schema/Account.Rating";

export default class ExploreGetRecord extends LightningElement {
  @api
  recordId;

  //2.
  @wire(getRecord, {
    recordId: "$recordId",
    fields: [NAME_FIELD, INDUSTRY_FIELD, RATING_FIELD]
  })
  accountRecord;

  //3.
  get name() {
    return getFieldValue(this.accountRecord.data, NAME_FIELD);
  }

  get industry() {
    return getFieldValue(this.accountRecord.data, INDUSTRY_FIELD);
  }

  get rating() {
    return getFieldValue(this.accountRecord.data, RATING_FIELD);
  }
}
