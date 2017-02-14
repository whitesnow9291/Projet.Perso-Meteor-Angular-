import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
// Listen to incoming HTTP requests, can only be used on the server
    WebApp.rawConnectHandlers.use(function(req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        return next();
    });

});

Meteor.methods({
    publication: function() {
        scraper = require('medium-scraper');
        var medium = {user: '@wdelenclos'}
        publications = scraper.getPosts(medium).then(function(results) {
            return results;
        })
        return publications;
    }
});

Meteor.methods({
    publicationTitle: function() {
        feedData = Scrape.feed("https://medium.com/feed/@wdelenclos/");
        return feedData;
    }
});

Meteor.methods({
    gallerie: function() {


        var data = [
            {
                "title": "Test1",
                "url": "http://image.com",
                "imgurl": "http://image.com",
                "p":"Loram ipsum"
            },
            {
                "title": "Test1",
                "url": "http://image.com",
                "imgurl": "http://image.com",
                "p":"Loram ipsum"
            },
            {
                "title": "Test1",
                "url": "http://image.com",
                "imgurl": "http://image.com",
                "p":"Loram ipsum"
            }
        ]

        return data;
    }
});

