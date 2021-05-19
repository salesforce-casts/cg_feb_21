import { LightningElement, api } from "lwc";
//1. Import the dependencies
import { deleteRecord } from "lightning/uiRecordApi";
export default class ExpDeleteRecord extends LightningElement {
  @api recordId;

  //2. Invoke the method by passing the params
  handleDelete() {
    deleteRecord(this.recordId)
      .then(() => {
        console.log("record is deleted");
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  }
}