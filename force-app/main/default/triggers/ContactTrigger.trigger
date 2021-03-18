trigger ContactTrigger on Contact (after insert) {
    
    //record is locked
    
    List<Contact> conList = new List<Contact>();
    
    for(Contact c : Trigger.new){        
        Contact a = new Contact();
        a.Id = c.Id;
		a.LastName = 'Updated Teja';
        
        conList.add(a);

    }
	update conList;    
    
}