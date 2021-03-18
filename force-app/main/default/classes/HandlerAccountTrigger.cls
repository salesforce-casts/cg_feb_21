public class HandlerAccountTrigger {
    public void foobar(List<Account> accountsList, 
                       Map<Id, Account> newAccountsMap, 
                       Map<Id, Account> oldAccountsMap){
                           
        List<Contact> contactList = [Select Id, FirstName, Account.Name FROM Contact 
                                     WHERE AccountId IN : accountsList];
        for(Contact c : contactList){
            if(oldAccountsMap.get(c.AccountId).Name != newAccountsMap.get(c.AccountId).Name){
                c.FirstName = c.Account.Name;
            }
        }
                           
		update contactList;
    }
}