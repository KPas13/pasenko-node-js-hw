import {logDelimiter} from "../logConfig.js";
import stream from "node:stream";

const formatMessage = new stream.Transform({
    readableObjectMode: true,
    writableObjectMode: true,
    transform(chunk, encoding, callback) {
        const { date, level, category, message } = chunk;
        const formattedMessage = {
            date,
            category,
            level,
            message: message.map(el => JSON.stringify(el)).join(logDelimiter)
        };
        callback(null, JSON.stringify(formattedMessage, null, 2) + ',');
    }
});

export default {formatMessage};