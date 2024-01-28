import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeStream = createWriteStream(file);

    process.stdin.pipe(writeStream);
};

await write();