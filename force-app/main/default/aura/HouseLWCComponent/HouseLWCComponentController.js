({
	doInit : function(component, event, helper) {
        
        /* used to extract the info we push from LWC */
    		let pr = component.get('v.pageReference');
        
        component.set('v.msg', pr.state.c__name);
        
        console.log(JSON.stringify(pr));
	}
})
