import {logDelimetter} from "../logConfig.js";

function formatMessage(date, level, category, message) {
    message = message.map((m) => JSON.stringify(m)).join(logDelimetter);
    return `Date: ${date}, category: ${category}, level: ${level}, message:${message}`;
}

export default {formatMessage};