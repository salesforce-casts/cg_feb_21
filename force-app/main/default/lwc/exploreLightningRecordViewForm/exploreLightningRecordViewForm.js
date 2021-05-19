import { LightningElement, api } from "lwc";

export default class ExploreLightningRecordViewForm extends LightningElement {
  @api
  recordId;

  objectApiName = "Account";
  
  handleSubmit(event) {
    console.log("IN HANDLE SUBMIT");

    //1. stop the form from submitting
    event.preventDefault();

    //2. Update a few fields
    const fields = event.detail.fields;
    fields.Rating = "Cold";

    //3. submit the form
    this.template.querySelector("lightning-record-edit-form").submit(fields);
  }

  handleSuccess() {
    this.dispatchEvent(
      new ShowToastEvent({
        title: "Success",
        message: "Record is saved!!!",
        variant: "success"
      })
    );
  }

  handleError() {
    console.log("IN HANDLE ERROR");
  }
}
