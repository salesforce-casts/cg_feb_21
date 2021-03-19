public class ContinuationApexController {
  public ContinuationApexController() {
  }

  @AuraEnabled(cacheable=true continuation=true)
  public static Object getAllRepos() {
    //instanting the class by specifying the timeout
    Continuation c = new Continuation(100);

    //callback method
    c.ContinuationMethod = 'processResponse';

    c.state = 'My own data';

    HttpRequest request = new HttpRequest();
    request.setMethod('GET');
    request.setEndpoint('https://api.github.com/repositories?since=364');

    c.addHttpRequest(request);
    return c;
  }

  @AuraEnabled(cacheable=true)
  public static Object processResponse(List<String> labels, Object state) {
    HttpResponse response = Continuation.getResponse(labels[0]);
    String result = response.getBody();

    return result;
  }
}
