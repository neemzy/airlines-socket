var server = require('http').createServer(),
    io = require('socket.io')(server);

var port = 47503;

io.on('connection', function (socket) {
    socket.on('task', function (id) {
        console.log('received task event for id ' + id);
        socket.broadcast.emit('task', { id: id });
    });
});

server.listen(port, function () {
    console.log('airlines-socket started on port ' + port)
});