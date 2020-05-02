import socketio from 'socket.io-client';

const socket = socketio('http://localhost:3333', {
  autoConnect: true,
});

export default function loadMessages(msg) {
  socket.on('msg', msg);
}
