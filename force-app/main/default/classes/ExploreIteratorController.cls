public with sharing class ExploreIteratorController {
  public ExploreIteratorController() {
  }

  @AuraEnabled(cacheable=true)
  public static List<Account> getRecords() {
    try {
      return [SELECT Id, Name, Rating, Industry FROM Account];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
