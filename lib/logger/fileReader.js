import fs from 'fs';
import path from 'path';

const LOG_CONFIG_FILE = 'logger.json';
let data2 = {};


function readFile(filePath) {
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        if (fileData.trim()) {
            return JSON.parse(fileData);
        }
    } catch (error) {
        console.error('Error reading file:', error);
    }
    return null;
}

data2 = readFile(path.join(LOG_CONFIG_FILE));

let logLevel = process.env.LOG_LEVEL || (data2 && data2.logLevel && data2.logLevel.toUpperCase()) || 'INFO';
let logAppender = process.env.LOG_APPENDER || (data2 && data2.appender && data2.appender.toUpperCase()) || 'CONSOLE';

function log(date, level, category, message) {
    const logLevels = ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'];
    const currentLevel = logLevels.indexOf(level.toUpperCase());
    const configLevel = logLevels.indexOf(logLevel);

    if (currentLevel >= configLevel) {
        const logMessage = `${formatMessage(date, level, category, message)}\n`;
        console.log(logMessage);
    }
}

function formatMessage(date, level, category, message) {
    return `Date: ${date}, category: ${category}, level: ${level}, message: ${JSON.stringify(message)}`;
}

export { logLevel, logAppender };
