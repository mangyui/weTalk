"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.use(express.static('public'));
var port = 9612;
var WebSocket = require('ws');
var wss = new WebSocket.Server({ port: 9615 });
// Broadcast to all.
var broadcast = function (data) {
    wss.clients.forEach(function (client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};
wss.on('connection', function (ws) {
    console.log('connection established');
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
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});
