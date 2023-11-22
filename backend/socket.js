var socketio = require('socket.io');
var cl = require('./utils/consolesUtils')

function SocketHandler (socketServer){
    const io = socketio(socketServer, {
        path: "/socket"
    })

    io.on('connection', (socket) => {
        cl.d(`New connection: ${socket.id}`);
    
        socket.on('message', (data) => {
            cl.d(`New message from ${socket.id}: ${data}`);
        })
    })
}

module.exports = SocketHandler