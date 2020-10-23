'use strict';
 
module.exports = {
  metadata: () => ({
    name: 'complete.training.CurrencyConverter',
    properties: {
      variable: {required: true,type: 'string'},
      baseCurrency: {required: true,type: 'string'},
      targetCurrencies: {required: true,type: 'string'},
      amount: {required: true,type: 'int'}
    },
    supportedActions: ['success', 'failure']
  }),
  invoke: (conversation, done) => {

    const { variable } = conversation.properties();
    const { baseCurrency } = conversation.properties();
    const { targetCurrencies } = conversation.properties();
    const { amount } = conversation.properties();
    conversation.logger().info("Input parameter values: variable: "+variable+", baseCurrency: "+baseCurrency+", targetCurrencies: "+targetCurrencies+", amount: "+amount);
    
    
    var tmpTargetCurrencies = targetCurrencies+","+baseCurrency;
    var fixerIoAPIKey = "<replace with your api key>"
    var reqUrl = "http://data.fixer.io/api/latest?access_key="+fixerIoAPIKey + "&base=EUR&symbols=" + tmpTargetCurrencies;
    // hide API key from logs
    conversation.logger().info("fixer.io request URL:"+reqUrl.replace(fixerIoAPIKey,"*********"));
    
    done();
  }
};
