import { api, LightningElement } from "lwc";

import NAME_FIELD from "@salesforce/schema/Account.Name";
import RATING_FIELD from "@salesforce/schema/Account.Rating";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";

export default class ExploreRecordForm extends LightningElement {
  @api
  recordId;

  fields = [NAME_FIELD, RATING_FIELD, INDUSTRY_FIELD];
}