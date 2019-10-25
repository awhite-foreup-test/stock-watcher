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
            console.log(url);
            return url;
        },
        parse: function (response, options) {
            console.log(response);
            if (!response.hasOwnProperty("Global Quote")) {
                return;
            }
            let quote = response["Global Quote"];
            return {
                symbol: quote["01. symbol"],
                open: Number.parseFloat(quote["02. open"]),
                high: Number.parseFloat(quote["03. high"]),
                low: Number.parseFloat(quote["04. low"]),
                price: Number.parseFloat(quote["05. price"]),
                change: Number.parseFloat(quote["09. change"]),
                changePercent: Number.parseFloat(quote["10. change percent"])
            }
        }
    });
})();
