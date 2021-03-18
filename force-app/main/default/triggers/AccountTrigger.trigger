trigger AccountTrigger on Account (before update, after update) {
    
    
    //Try inserting 1 record or 10K records it's bulkified
    for( Account a : Trigger.new){
        
        //record a will be locked
        //a.Name = 'so and so';
        //update a;
        /*
        Account aNew = new Account();
        aNew.Id = a.Id;
        aNew.Name = 'Testing Accout Name using Trigger';  
        update aNew;
        */
        System.debug(' 🚀 ' + Trigger.old);
        System.debug(' 🚀 ' + Trigger.new);
        //System.debug(' 🚀 ' + Trigger.oldMap);
        
    }
}