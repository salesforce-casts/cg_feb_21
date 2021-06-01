import { LightningElement, api } from "lwc";

export default class ExploreSurfacingComponent extends LightningElement {
  @api
  noOfMonths;
  
  @api
  loanAmount;
}
