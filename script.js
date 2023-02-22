const ws = new WebSocket('ws://localhost:8080');

const messagesDiv = document.getElementById('messages');
const input = document.getElementById('input');

ws.onopen = function() {
  console.log('WebSocket connection established');
};

ws.onmessage = function(event) {
  const reader = new FileReader();
  reader.addEventListener('loadend', function() {
    const message = new TextDecoder().decode(reader.result);
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messagesDiv.appendChild(messageElement);
  });
  reader.readAsArrayBuffer(event.data);
};

input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    const message = input.value;
    ws.send(message);
    input.value = '';
  }
});

  



