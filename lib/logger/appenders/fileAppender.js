import fs from 'fs';
import path from 'path';

const filePath = path.join('app.log');

function log(date, level, category, message) {
    const messageFile = `${formatMessage(date, level, category, message)}\n`;

    fs.appendFile(filePath, messageFile, (e) => {
        if(e) {
            console.log(`Error for writing file: ${e}`);
        }
    });
}


function formatMessage(date, level, category, message) {
    return `Date: ${date}, category: ${category}, level: ${level}, message:${JSON.stringify(message)}`;
}

export default {log}