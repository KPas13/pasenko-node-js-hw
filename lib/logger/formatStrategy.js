import * as constants from './constants.js';
import defaultFormatMessage from './formats/default.js';
import jsonFormatMessage from './formats/json.js';
import config from "./config.js";

const formats = {
    [constants.formats.DEFAULT]: defaultFormatMessage,
    [constants.formats.JSON]: jsonFormatMessage,
    [undefined]: defaultFormatMessage
}

function getFormat() {
    return formats[config.format]
}

export {getFormat};



