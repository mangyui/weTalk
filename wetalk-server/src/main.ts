import express = require('express')
const app: express.Application = express();
app.use(express.static('public'));

const port:Number = 9612

const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 9615 });
// Broadcast to all.
const broadcast = (data: string) => {
	console.log('ccc', wss.clients.size)
	var dataJson = JSON.parse(data)
	dataJson.number = wss.clients.size
	wss.clients.forEach((client: any) => {
		if (client.readyState === WebSocket.OPEN) {
			client.send(dataJson);
		}
	});
};
wss.on('connection', (ws: any) => {
	console.log('connection established');
	ws.on('message', (data: string) => {
		broadcast(data);
	});

	ws.on('error', (error: any) => {
		console.log(error);
	});

	wss.on('close', (mes: any) => {
		console.log(mes);
		console.log('closed');
	});
});

wss.on('error', (err: any) => {
	console.log('error');
	console.log(err);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('Example app listening on port ' + port);
});