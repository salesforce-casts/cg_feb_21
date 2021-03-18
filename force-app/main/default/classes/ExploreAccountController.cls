public with sharing class ExploreAccountController {
    public ExploreAccountController() {

    }

    @AuraEnabled
    public static List<Account> getRecords(){
        try {
            return [SELECT Id, Name, Rating, Industry FROM Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}
