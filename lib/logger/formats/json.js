import {logDelimetter} from "../logConfig.js";

function formatMessage(date, level, category, message) {
    message = message.map((m) => JSON.stringify(m)).join(logDelimetter);
    return {
        date: date,
        level: level,
        category: category,
        message: message
    };
}

export default {formatMessage};