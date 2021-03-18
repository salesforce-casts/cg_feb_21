import { LightningElement } from "lwc";

import { NavigationMixin } from "lightning/navigation";

export default class ExploreNavigation extends NavigationMixin(
  LightningElement
) {
  handleClick() {
    let conf = {
      type: "standard__recordPage",
      attributes: {
        recordId: "00Q5g000002rEWxEAM",
        objectApiName: "Lead",
        actionName: "view"
      }
    };

    this[NavigationMixin.Navigate](conf);
  }
}