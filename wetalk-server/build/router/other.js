"use strict";
var express = require('express');
var request = require('request');
var mRouter = express.Router();
// const Tag = Models.Tag
mRouter.get('/weather', function (req, res, next) {
    var url = 'https://www.apiopen.top/weatherApi';
    request.get({ url: url, qs: req.query }, function (err, httpResponse, body) {
        res.send(body);
    });
});
mRouter.get('/musics', function (req, res, next) {
    var url = 'https://api.apiopen.top/searchMusic';
    request.get({ url: url, qs: req.query }, function (err, httpResponse, body) {
        res.send(body);
    });
});
module.exports = mRouter;
