"use strict";
var app = app || {};

(function () {
    "use strict";

    app.StockQuotes = Backbone.Collection.extend({
        model: app.StockQuote
    });

    app.stockQuotes = new app.StockQuotes();
})();
