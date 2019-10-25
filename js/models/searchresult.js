"use strict";
var app = app || {};

(function () {
    "use strict";

    app.SearchResult = Backbone.Model.extend({
        defaults: {
            keyword: ""
        },
        url: function() {
            let baseurl = "https://www.alphavantage.co/query"
            let url = baseurl + "?" + jQuery.param({
                function: "SYMBOL_SEARCH",
                keywords: this.get("keyword"),
                apikey: ALPHA_VANTAGE_API_KEY
            });
            console.log(url);
            return url;
        },
        parse: function (response, options) {
            console.log(response);
            if (!(response.hasOwnProperty("bestMatches") && response['bestMatches'].length > 0)) {
                return;
            }
            let bestMatch = response["bestMatches"][0];
            let result = {
                symbol: bestMatch["1. symbol"],
                name: bestMatch["2. name"]
            };
            if (result.symbol.toUpperCase() === this.get("keyword").toUpperCase()) {
                return result;
            }
        }
    });
})();
