public class ExtensionController1 {
    
    public String message {set; get;}
    public List<Account> accountsList {set;get;}
    public ExtensionController1(ApexPages.StandardController controller){
        message = 'HEY!!!! Salesforce Casts!';
        
    }
    
    public void saveRecord(){
		accountsList = [SELECT Id, Name, Rating, Industry FROM Account];	
        System.debug('In 1st Extension' + message);
    }
    
    
    public PageReference sendToSecondPage(){

        return new PageReference('/apex/SecondPage');
        
    }
}