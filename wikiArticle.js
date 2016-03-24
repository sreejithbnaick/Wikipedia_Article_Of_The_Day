var scraperjs = require('scraperjs');
var request = require('request');
var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];

function getDate(ts) {
    var date = new Date(ts);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return monthNames[monthIndex] + "_" + day + ",_" + year;
}

function wikiArticle(ts, callback) {
    var date;
    if (ts == undefined || ts == null) {
        date = getDate(Date.now());
    } else {
        date = getDate(ts);
    }
    console.log("Date: " + date);
    scraperjs.StaticScraper.create('https://en.m.wikipedia.org/wiki/Wikipedia:Today\'s_featured_article/' + date)
        .scrape(function ($) {
            return $("#bodyContent a")[1].attribs.title;
        })
        .then(function (title) {
            var encodedTitle = encodeURIComponent(title);
            var request = require("request");
            request.get("https://rest.wikimedia.org/en.wikipedia.org/v1/page/summary/" + encodedTitle, function (error, response, body) {
                if (error) {
                    console.log(error);
                } else {
                    callback(body);
                }
            });
        })
}

module.exports = wikiArticle;

