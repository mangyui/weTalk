"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = 9612;
app.use(require('cors')()); // 跨域
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var router = require('./router');
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use(express.static('public'));
app.use('/other', router.other);
var server = app.listen(port, '0.0.0.0', function () {
    console.log('Example app listening on port ' + port);
});
var WebSocket = require('ws');
var wss = new WebSocket.Server({ server: server });
// Broadcast to all.
var broadcast = function (data) {
    console.log('ccc', wss.clients.size);
    var dataJson = JSON.parse(data);
    dataJson.number = wss.clients.size;
    wss.clients.forEach(function (client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(dataJson));
        }
    });
};
wss.on('connection', function (ws) {
    console.log(new Date().toUTCString() + ' - connection established');
    ws.on('message', function (data) {
        broadcast(data);
    });
    ws.on('error', function (error) {
        console.log(error);
    });
    wss.on('close', function (mes) {
        console.log(mes);
        console.log('closed');
    });
});
wss.on('error', function (err) {
    console.log('error');
    console.log(err);
});
