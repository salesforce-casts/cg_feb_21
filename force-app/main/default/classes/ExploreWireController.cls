public with sharing class ExploreWireController {
  public ExploreWireController() {
  }

  @AuraEnabled(cacheable=true)
  public static List<Account> fetchRecords() {
    return [SELECT Name, Rating, Industry FROM Account];
  }

  @AuraEnabled(cacheable=true)
  public static String getUsername() {
    return 'Krishna Teja';
  }

  @AuraEnabled
  public static List<Account> processAccounts() {
    /* 
        Log__c l = new Log();
        l.Name = 'Process Accounts Method is invoked';
        
        insert l;
      */
    return [SELECT Id, Name, Rating, Industry FROM Account];
  }

  //   @AuraEnabled
  //   public static List<Account> fetchRecordsMap() {
  //     return [SELECT Name, Rating, Industry FROM Account];
  //   }

  //   @AuraEnabled(cacheable=true continuation=true)
  //   public static List<Account> fetchRecordsAsync() {
  //     return [SELECT Name, Rating, Industry FROM Account];
  //   }
}
