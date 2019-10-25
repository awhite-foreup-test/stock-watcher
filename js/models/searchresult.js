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
            return url;
        },
        parse: function (response, options) {
            if (!response.hasOwnProperty("bestMatches")) {
                // What should it do?
                alert("Error");
                return;
            }
            if (response['bestMatches'].length === 0) {
                // What should it do?
                alert("No match found.");
                return;
            }
            let bestMatch = response["bestMatches"][0];
            let result = {
                symbol: bestMatch["1. symbol"],
                name: bestMatch["2. name"]
            };
            if (result.symbol.toUpperCase() === this.get("keyword").toUpperCase()) {
                return result;
            } else {
                // What should it do?
                alert("Did you mean " + result.symbol + " (" + result.name + ")?");
            }
        }
    });
})();
