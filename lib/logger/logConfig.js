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
    return typeof value === 'string' ? value.toUpperCase().split(',') : value;
}

let logLevel = process.env.LOG_LEVEL || data.logLevel;
let logAppender = process.env.LOG_APPENDER || data.appender;
let logFormat = process.env.LOG_FORMATTER || data.format;
let logDelimetter = process.env.LOG_DELIMETTER || data.delimetter || ',';

const formattedLogLevel = formatToUpperCase(logLevel);
const formattedLogAppender = formatToUpperCase(logAppender);
const formattedLogFormat = formatToUpperCase(logFormat);
const formattedLogDelimetter = formatToUpperCase(logDelimetter);

export { formattedLogLevel as logLevel, formattedLogAppender as logAppender, formattedLogFormat as logFormat, formattedLogDelimetter as logDelimetter };
