"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.use(express.static('public'));
var port = 9612;
var WebSocket = require('ws');
app.get('/', function (req, res) {
    res.send('Hello World!');
});
var server = app.listen(port, '0.0.0.0', function () {
    console.log('Example app listening on port ' + port);
});
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
