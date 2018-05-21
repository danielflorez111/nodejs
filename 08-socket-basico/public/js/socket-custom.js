var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Se perdió la conexión con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    mensaje: 'Hola mundo'
}, function () {
    console.log('Se disparó el Callback');
});

socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor', mensaje);
});