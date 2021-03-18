import { LightningElement, api } from "lwc";

export default class ExploreLightningRecordViewForm extends LightningElement {
  @api
  recordId;

  objectApiName = "Account";
}
