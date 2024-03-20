import config from '../config.js';
import { Writable, Readable } from 'stream';
import net from 'net';
import {logServerPort, logHostname} from "../logConfig.js";

let client;
let networkAppender = false;

function connectToServer() {
    if (!networkAppender) {
        return;
    }

    const { port, hostname } = { port: logServerPort , hostname: logHostname.toString() };

    if (!port || !hostname) {
        console.error('Network configuration is incomplete');
        return;
    }

    client = net.connect({ port, host: hostname });

    client.setEncoding('utf-8');

    client.on('connect', () => {
        console.log('Connected to server');
    });

    client.on('error', (error) => {
        console.error('Error connecting to server:', error);
        client.destroy();
    });

    client.on('close', () => {
        console.log('Connection closed');
    });

    client.on('end', () => {
        console.log('Disconnected from server');
    });

    process.on('beforeExit', () => {
        client.end();
    });
}

const create = (ee, eventName) => {
    if (!config.network) {
        console.error('Network configuration is missing');
        return;
    }

    networkAppender = true;
    connectToServer();

    const log = new Writable({
        write(chunk, encoding, callback) {
            try {
                let logData;

                if (Buffer.isBuffer(chunk)) {
                    logData = chunk;
                } else if (chunk instanceof Uint8Array) {
                    logData = Buffer.from(chunk);
                } else if (typeof chunk === 'string') {
                    logData = Buffer.from(chunk, encoding);
                } else {
                    const error = new Error('Invalid chunk type');
                    throw error;
                }

                if (networkAppender && client && client.writable) {
                    client.write(logData);
                } else {
                    console.error('Network configuration is incomplete');
                }

                callback();
            } catch (error) {
                console.error('Error writing chunk:', error);
                callback(error);
            }
        }
    });

    const readableLog = new Readable({
        objectMode: true,
        read() {}
    });

    ee.on(eventName, (date, level, category, message) => {
        const logObject = { date, level, category, message };
        const logString = JSON.stringify(logObject);
        readableLog.push(logString);
    });

    readableLog.pipe(log);
}

export default { create };