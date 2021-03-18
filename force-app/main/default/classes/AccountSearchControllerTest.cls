@isTest
private class AccountSearchControllerTest {

    
    //Are the 
    @isTest static void testSearch(){
        
        //create a record
        Account acc = new Account();
        acc.Name = 'Teja';
        insert acc;
        
        //100 Soql Queries
        
        //test the functionality
        Test.startTest();
        
        AccountSearchController a = new AccountSearchController();
        
        a.searchText = 'Teja';
        a.search();
        
        Test.stopTest();
        
    }
    
}