import { errors, contentTypeJson } from './constants.js';

const logCache = [];

const readingLogs = async () => {
    return logCache;
};

const addingLogs = (log) => {
    logCache.push(log);
};

const errorResponse = (res) => {
    res.writeHead(errors.ERROR, contentTypeJson);
    return {
        message: `Route Not Found`,
    };
};

const types = {
    undefined: errorResponse,
    function: (fn, req, res) => fn(req, res),
};

export { types, addingLogs, readingLogs };
