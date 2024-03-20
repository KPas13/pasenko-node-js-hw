const socketPort = process.env['SOCKET_PORT'] || 8000;
const serverPort = process.env['SERVER_PORT'] || 8005;
const hostname = process.env['HOSTNAME'] || 'localhost';

const errors = {
    OK: 200,
    ERROR: 400,
};

const contentTypeJson = { 'Content-Type': 'application/json' };

export { socketPort, serverPort, hostname, errors, contentTypeJson  };