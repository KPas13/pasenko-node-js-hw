import * as constants from './constants.js';
import {logAppender, logLevel, logFormat} from './logConfig.js';


const defaultConfig = {
    logLevel: logLevel || constants.level.INFO,
    scoreLevel: constants.scoreLevel[constants.level.INFO],
    appender: logAppender || [constants.appender.CONSOLE],
    format: logFormat || constants.formats.DEFAULT
}

function enrichConfig(config) {
    config.scoreLevel = constants.scoreLevel[config.logLevel];
}

function initConfig() {
    const config =  defaultConfig;

    enrichConfig(config);
    
    return config;
}

const config = initConfig()

export default config;