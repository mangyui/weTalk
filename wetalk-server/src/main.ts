import express = require('express')
const app: express.Application = express();
const bodyParser = require('body-parser')

const port:number = 9612

app.use(require('cors')()) // 跨域
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const router = require('./router')

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use(express.static('public'));

app.use('/other', router.other)



var server = app.listen(port, '0.0.0.0', () => {
  console.log('Example app listening on port ' + port);
});


const WebSocket = require('ws')

const wss = new WebSocket.Server({ server });
// Broadcast to all.
const broadcast = (data: string) => {
	console.log('ccc', wss.clients.size)
	var dataJson = JSON.parse(data)
	dataJson.number = wss.clients.size
	wss.clients.forEach((client: any) => {
		if (client.readyState === WebSocket.OPEN) {
			client.send(JSON.stringify(dataJson));
		}
	});
};
wss.on('connection', (ws: any) => {
	console.log(new Date().toUTCString() + ' - connection established');
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
