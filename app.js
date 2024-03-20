import logger from './lib/logger/logger.js';
import color from './color.js';
import fruit from './fruit.js';
import { add } from './handler.js';

const log = logger.getLogger('app.js');
const data = { 1: '1' };
const user = { name: 'Kate', age: 19 };

log.info(color);
log.info("Data", data, "User:", user, "Sdf", "test");
log.warn(fruit);
log.error("ERROR occur: My log");
log.debug(color);
log.trace(fruit);

add(3, 5);

