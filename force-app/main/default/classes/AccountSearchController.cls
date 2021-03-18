public class AccountSearchController {
    
    public String searchText {set;get;}
    public List<Account> accountsList{set;get;}
    public void search(){
        
        String q = '%'+searchText+'%';
        
        accountsList = [SELECT Id, Name, Industry, Rating FROM Account WHERE Name LIKE :q];
         
        
        
    }
}