trigger AccountTriggerHandler on Account (before update) {
    
    if(Trigger.isBefore){
        if(Trigger.isInsert){
            //before insert
        }
        if(Trigger.isUpdate){
            //before update
        }
    }
    
    if(Trigger.isAfter){
        if(Trigger.isInsert){
            //after insert
        }
        if(Trigger.isUpdate){
            //after update
            HandlerAccountTrigger a = new HandlerAccountTrigger();
            a.foobar(Trigger.New, Trigger.newMap, Trigger.oldMap);
        }
    }
    
}