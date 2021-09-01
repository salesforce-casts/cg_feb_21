({
  handleClick: function(component, event, helper) {
    var payload = {
      recordId: "001HSGKDHJ6834BHS",
        name: "Teja"
    };

    component.find("sampleMessageChannel").publish(payload);
  }
});