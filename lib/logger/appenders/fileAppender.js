import fs from 'fs';
import path from 'path';
import {formatMessage} from "../../../utils.js";

const filePath = path.join('app.log');

function log(date, level, category, message) {
    const messageFile = `${formatMessage(date, level, category, message)}\n`;

    fs.appendFile(filePath, messageFile, (e) => {
        if(e) {
            console.log(`Error for writing file: ${e}`);
        }
    });
}

export default {log}