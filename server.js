// app.js

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function(ws) {
  console.log('WebSocket connection established');

  ws.on('message', function(message) {
    console.log('Received message:', message);
    wss.clients.forEach(function(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

