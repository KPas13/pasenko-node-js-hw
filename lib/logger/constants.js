const level = {
    ERROR: 'ERROR',
    WARN: 'WARN',
    INFO: 'INFO',
    TRACE: 'TRACE',
    DEBUG: 'DEBUG'
}

const scoreLevel = {
    [level.ERROR]: 1,
    [level.WARN]: 2,
    [level.INFO]: 3,
    [level.DEBUG]: 4,
    [level.TRACE]: 5
}

const appender = {
    CONSOLE: 'CONSOLE',
    FILE: 'FILE',
    NETWORK: 'NETWORK'
}

const formats = {
    DEFAULT: 'DEFAULT',
    JSON: 'JSON'
}



export {level, scoreLevel, appender, formats}