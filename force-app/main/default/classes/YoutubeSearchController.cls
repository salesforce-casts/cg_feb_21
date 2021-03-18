public class YoutubeSearchController {
    
    public String body{set;get;}
    public List<MyOwnDataType> dataList{set;get;}
    public void search(){
        
        dataList = new List<MyOwnDataType>();
        
        //1. Instantiate HTTP Class
        Http http = new Http();
        
        //2. Instantiate HttpRequest Class and frame the request
        HttpRequest req = new HttpRequest();
        
        //2.1 Endpoint
        req.setEndpoint('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC4VyzR4uWqMofCCjtKry4sg&q=aura%20component&key=AIzaSyAWmb0hNSpT5NFMTlqStrvQkFTRtv_o1XI');
        
        //2.2 Method
        req.setMethod('GET');
        
        //2.3 What's the response type
        req.setHeader('Accept', 'application/json');
        
        //3. Instantaite HttpResponse Class and handle the response
        HttpResponse response = http.send(req);
        body = response.getBody();  
        
        fromJSON d = (fromJSON)JSON.deserialize(body, fromJSON.class);
        
        for(Integer i = 0; i< d.items.size(); i++){
        	//List<Account> a = new List<Account>();
        	//a.add(new Account(Name = 'Testing', Rating = 'Hot'));
        	//List < create a record < extracting data from class
        	dataList.add(new MyOwnDataType(d.items[i].snippet.title,d.items[i].snippet.description,d.items[i].snippet.thumbnails.medium.url,d.items[i].snippet.publishedAt));
        }
        /**List<Account> [<Account>, <Account>, <Account>, <Account>]
        List<Account> acc = new List<Account>();

        Account a = new Account();
        a.Name = 'Testing';
        insert a;
		acc.add(a);

        Account a1 = new Account();
        a1.Name = 'Testing';
        insert a1;
        acc.add(a1);
        */
        

    }
    
    public class MyOwnDataType{
        public String title{set;get;}
        public String description{set;get;}
        public String publishedAt{set;get;}
        public String thumbnail{set;get;}
        
        public MyOwnDataType(String title,  String description, String thumbnail, String publishedAt){
            this.title = title;
            this.description = description;
            this.publishedAt = publishedAt;
            this.thumbnail = thumbnail;
        }
    } 
    
    
    //1. Copied the code the admin booster 
    //2. Removed test and parse method
    //3. We cannot have inner class in another inner class. We can only have one level inner class. 
    public class fromJSON{
        public String kind;	//youtube#searchListResponse
        public String etag;	//n26XaE1Vvwi7kNd944FbiKjlmxk
        public String nextPageToken;	//CAUQAA
        public String regionCode;	//US
        public cls_pageInfo pageInfo;
        public cls_items[] items;
        
        
    }
    
    class cls_pageInfo {
        public Integer totalResults;	//47
        public Integer resultsPerPage;	//5
    }
    class cls_items {
        public String kind;	//youtube#searchResult
        public String etag;	//ripdsNXHgZkUc2UxG3IT9Bc0Q2k
        public cls_id id;
        public cls_snippet snippet;
    }
    class cls_id {
        public String kind;	//youtube#video
        public String videoId;	//MwWUrzU8kUg
    }
    class cls_snippet {
        public String publishedAt;	//2020-01-29T04:30:41Z
        public String channelId;	//UC4VyzR4uWqMofCCjtKry4sg
        public String title;	//01. Introduction to Aura Components Development
        public String description;	//Links - Instagram: https://instagram.com/iam_kkteja - My website / blog - https://blog.salesforcecasts.com - Facebook - https://facebook.com/kkteja - Twitter ...
        public cls_thumbnails thumbnails;
        public String channelTitle;	//Salesforce Casts
        public String liveBroadcastContent;	//none
        public String publishTime;	//2020-01-29T04:30:41Z
    }
    class cls_thumbnails {
        public cls_default default_x;
        public cls_medium medium;
        public cls_high high;
    }
    class cls_default {
        public String url;	//https://i.ytimg.com/vi/MwWUrzU8kUg/default.jpg
        public Integer width;	//120
        public Integer height;	//90
    }
    class cls_medium {
        public String url;	//https://i.ytimg.com/vi/MwWUrzU8kUg/mqdefault.jpg
        public Integer width;	//320
        public Integer height;	//180
    }
    class cls_high {
        public String url;	//https://i.ytimg.com/vi/MwWUrzU8kUg/hqdefault.jpg
        public Integer width;	//480
        public Integer height;	//360
    }
}