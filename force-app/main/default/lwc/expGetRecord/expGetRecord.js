import { LightningElement, wire, api } from "lwc";

import { getRecord } from "lightning/uiRecordApi";

const FIELDS = ["Account.Name", "Account.Industry", "Account.Rating"];

export default class ExpGetRecord extends LightningElement {
  @api recordId;

  @wire(getRecord, { recordId: "$recordId", fields: FIELDS })
  accounts;

  get name() {
    return this.accounts.data.fields.Name.value;
  }

  get industry() {
    return this.accounts.data.fields.Industry.value;
  }

  get rating() {
    return this.accounts.data.fields.Rating.value;
  }
}