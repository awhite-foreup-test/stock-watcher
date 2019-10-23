"use strict";
var app = app || {};

(function () {
    "use strict";

    app.StockQuote = Backbone.Model.extend({
        initialize: function(attributes, options) {
            this.symbol = attributes.symbol;
            this.name = attributes.name;
        },
        url: function() {
            let baseurl = "https://www.alphavantage.co/query"
            let url = baseurl + "?" + jQuery.param({
                function: "GLOBAL_QUOTE",
                symbol: this.symbol,
                apikey: ALPHA_VANTAGE_API_KEY
            });
            return url;
        },
        parse: function (response, options) {
            let quote = response["Global Quote"];
            return {
                symbol: quote["01. symbol"],
                open: quote["02. open"],
                high: quote["03. high"],
                low: quote["04. low"],
                price: quote["05. price"],
                change: quote["09. change"],
                changePercent: quote["10. change percent"]
            }
        }
    });
})();
