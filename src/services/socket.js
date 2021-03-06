import socketio from 'socket.io-client';

const socket = socketio(
    // 'http://192.168.1.102:3333/',
    'http://devradar-abel.herokuapp.com',
    {
        autoConnect: false,
    }
);

function subscribeToNewDevsAround(subscribeFunction) {
    socket.on('new-devs-around', subscribeFunction);
}

function connect(longitude, latitude, techs) {
    socket.io.opts.query = {
        longitude,
        latitude,
        techs
    };

    socket.connect();
}

function disconnect() {
    if(socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevsAround
};