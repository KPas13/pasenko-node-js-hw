import * as constants from './constants.js'
import config from "./config.js";
import consoleAppender from './appenders/console.js'
import fileAppender from './appenders/fileAppender.js'

const appenders = {
    [constants.appender.CONSOLE]: consoleAppender,
    [constants.appender.FILE]: fileAppender,
    [undefined]: consoleAppender
}
function getAppender() {
    let appenderArray = [];
    for (const k of config.appender) {
        appenderArray.push(appenders[k]);
    }
    return appenderArray;
}


export {getAppender}