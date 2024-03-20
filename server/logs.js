import { errors, contentTypeJson } from './constants.js';
import { readingLogs } from './utils.js';

const getLogs = async (req, res) => {
    try {
        const logs = await readingLogs();
        response(res, errors.OK, logs);
    } catch (error) {
        console.error('Error getting logs:', error);
        response(res, errors.ERROR, { error: 'Internal Server Error' });
    }
};

const response = (res, statusCode, data) => {
    res.writeHead(statusCode, contentTypeJson);
    res.end(JSON.stringify(data));
};

export { getLogs };
