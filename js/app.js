"use strict";
var app = app || {};
const ALPHA_VANTAGE_API_KEY = "HY0JP87WH3PG17X6";

$(function () {
    "use strict";

    new app.AppView();

    app.stockQuotes.add(new app.StockQuote({
        name: "Alphabet Inc. Cl c",
        symbol: "GOOG",
        open: 691,
        high: 709.28,
        low: 689.47,
        price: 706.32,
        change: 15.32,
        changePercent: 2.22
    }));
    app.stockQuotes.add(new app.StockQuote({
        name: "Yahoo! Inc",
        symbol: "YHOO",
        open: 29.28,
        high: 29.66,
        low: 29.06,
        price: 29.27,
        change: -0.01,
        changePercent: -0.03
    }));
    app.stockQuotes.add(new app.StockQuote({
        name: "American International",
        symbol: "AIG",
        open: 52.06,
        high: 53.47,
        low: 52.28,
        price: 53.08,
        change: 1.02,
        changePercent: 1.96
    }));
    app.stockQuotes.add(new app.StockQuote({
        name: "VelocityShares 3x Long term",
        symbol: "UWTIF",
        open: 1.37,
        high: 1.74,
        low: 1.50,
        price: 1.61,
        change: 0.24,
        changePercent: 16.55
    }));
    app.stockQuotes.add(new app.StockQuote({
        name: "3x Inverse Crude",
        symbol: "DWTIF",
        open: 307.10,
        high: 297.50,
        low: 245.59,
        price: 253.41,
        change: -53.69,
        changePercent: -17.48
    }));
    app.stockQuotes.add(new app.StockQuote({
        name: "Groupon Inc",
        symbol: "GRPN",
        open: 4.08,
        high: 4.13,
        low: 3.60,
        price: 3.74,
        change: -0.34,
        changePercent: -8.33
    }));

})
