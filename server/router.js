import url from 'url';
import { getLogs } from './logs.js';
import { types } from './utils.js';
import { hostname } from './constants.js';

const routing = {
    [`${hostname}/logs`]: getLogs,
};

const router = async (req, res) => {
    const path = url.parse(req.url).pathname;
    console.log(path);

    const routeHandler = routing[path];
    const routeHandlerType = typeof routeHandler;
    const serializer = types[routeHandlerType];

    let result;
    if (serializer) {
        result = await serializer(routeHandler, req, res);
    } else {
        result = { error: 'Route Not Found' };
    }

    if (result.error) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
    }

    res.end(JSON.stringify(result));
};

export default router;
