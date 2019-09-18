"use strict";
var express = require('express');
var request = require('request');
var fs = require('fs');
var multiparty = require('connect-multiparty');
var upload = multiparty();
var mRouter = express.Router();
// const Tag = Models.Tag
function setStatus(err, res, body) {
    if (err) {
        res.send({ rec: -1 });
    }
    else {
        var resBody = JSON.parse(body);
        resBody.rec = 0;
        res.send(resBody);
    }
}
mRouter.get('/weather', function (req, res, next) {
    var url = 'https://www.apiopen.top/weatherApi';
    request.get({ url: url, qs: req.query }, function (err, httpResponse, body) {
        setStatus(err, res, body);
    });
});
mRouter.get('/musics', function (req, res, next) {
    var url = 'https://api.apiopen.top/searchMusic';
    request.get({ url: url, qs: req.query }, function (err, httpResponse, body) {
        setStatus(err, res, body);
    });
});
mRouter.get('/getGarbage', function (req, res, next) {
    var url = 'http://api.choviwu.top/garbage/getGarbage';
    request.get({ url: url, qs: req.query }, function (err, httpResponse, body) {
        setStatus(err, res, body);
    });
});
mRouter.get('/recentGs', function (req, res, next) {
    var url = 'http://api.choviwu.top/garbage/recentGs';
    request.get({ url: url, qs: req.query }, function (err, httpResponse, body) {
        setStatus(err, res, body);
    });
});
mRouter.post('/garbageImg', upload, function (req, res, next) {
    var url = 'http://api.choviwu.top/garbage/uploadFile';
    var formData = {
        file: fs.createReadStream(req.files.file.path),
    };
    request.post({ url: url, formData: formData }, function (err, httpResponse, body) {
        setStatus(err, res, body);
    });
});
module.exports = mRouter;
