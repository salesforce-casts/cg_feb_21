public class BoxAuthDemoController {

    public String body{set;get;}
    
    public PageReference authenticate(){
		
        /* PageReference pr = new PageReference('URL');
         * return pr;
         * 
         * return new PageReference('URL'); 
         */
        return new PageReference('https://account.box.com/api/oauth2/authorize/?client_id=uvow0vd6734qpydm6u7ncbmpi8kue6ac&response_type=code');                               
        
    }
    
    public void getAccessToken(){
        String authCode = apexpages.currentPage().getParameters().get('code');
        
        System.debug(authCode);
        
        
        //Step1 - Instantiate HTTP Class
        Http http = new Http();
        
        //Step2 - Instantiate HttpRequest Class and frame the request
        HttpRequest req = new HttpRequest();
        
        req.setEndpoint('https://api.box.com/oauth2/token/');
        req.setMethod('POST');
        req.setHeader('Accept', 'application/json');
        req.setBody('grant_type=authorization_code&code='+authCode+'&client_id=uvow0vd6734qpydm6u7ncbmpi8kue6ac&client_secret=XKsx8GYVSUcCwY8qRis8wfdJTMTIjuNq');
        
        //Step3 - Instantiate HttpResponse Class and send req, handle response
        HttpResponse res = http.send(req);
        body = res.getBody();
    }
    
    
    
    
    
        
}