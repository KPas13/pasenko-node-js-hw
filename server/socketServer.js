import net from 'node:net';
import { addingLogs } from './utils.js';

const socketServer = net.createServer((client) => {
    console.log('Client successfully connected');

    client.on('end', () => {
        console.log('Client disconnected');
    });

    client.on('data', (data) => {
        const data2 = data.toString();
        console.log(data2);
        addingLogs(data2);
    });
});

socketServer.on('error', (err) => {
    console.error('Socket server error:', err);
    throw err;
});

export default socketServer;
