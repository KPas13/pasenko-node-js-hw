import {logDelimiter} from "../logConfig.js";
import stream from "node:stream";

const formatMessage = new stream.Transform({
    readableObjectMode: true,
    writableObjectMode: true,
    transform(chunk, encoding, callback) {
        const { date, level, category, message } = chunk;
        const formattedMessage = `Date: ${date}, category: ${category}, level: ${level}, message: ${message.map((el) => {
            JSON.stringify(el)
        }).join(logDelimiter)}\n`;
        callback(null, formattedMessage);
    }
});

export default {formatMessage};