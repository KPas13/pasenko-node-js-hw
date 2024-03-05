import fs from 'fs';
import path from 'path';

const filePath = path.join('app.log');

async function log(message) {
    try {
        const messageFile = `${JSON.stringify(message)}\n`;
        await fs.promises.appendFile(filePath, messageFile);
    } catch (error) {
        console.error(`Error for writing file: ${error}`);
    }
}

export default { log };
