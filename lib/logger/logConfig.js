import fs from 'fs';
import path from 'path';

const LOG_CONFIG_FILE = 'logger.json';
let data = readFile();

function readFile() {
    try {
        const filePath = path.join(LOG_CONFIG_FILE);
        const fileData = fs.readFileSync(filePath, 'utf8');
        if (fileData.trim()) {
            return JSON.parse(fileData);
        }
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

function formatToUpperCase(value) {
    return typeof value === 'string' ? value.toUpperCase() : value;
}

let logLevel = process.env.LOG_LEVEL || data.logLevel;
let logAppender = process.env.LOG_APPENDER || data.appender;

const formattedLogLevel = formatToUpperCase(logLevel);
const formattedLogAppender = formatToUpperCase(logAppender);

export { formattedLogLevel as logLevel, formattedLogAppender as logAppender };
