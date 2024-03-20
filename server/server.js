import app from './app.js';
import { serverPort, socketPort } from './constants.js';
import server from './socketServer.js';

server.listen(socketPort, () => {
    console.log(`The socket server is listening on port ${socketPort}`);
});

app.listen(serverPort, () =>
    console.log(`The server is listening on port ${serverPort}`)
);