import { LightningElement, wire } from "lwc";

import getRecords from "@salesforce/apex/ExploreIteratorController.getRecords";

export default class ExploreIterators extends LightningElement {
  @wire(getRecords)
  records;
}
