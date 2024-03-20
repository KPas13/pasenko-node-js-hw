import * as constants from './constants.js'
import config from "./config.js";
import consoleAppender from './appenders/console.js'
import fileAppender from './appenders/fileAppender.js'
import networkAppender from './appenders/networkAppender.js'

const appenders = {
    [constants.appender.CONSOLE]: consoleAppender,
    [constants.appender.FILE]: fileAppender,
    [constants.appender.NETWORK]: networkAppender,
    [undefined]: consoleAppender
}
function initAppender(ee, eventName, format) {
    for(const k of config.appender) {
        appenders[k].create(ee, eventName, format);
    }
}

export {initAppender}