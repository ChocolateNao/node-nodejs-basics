import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const readStream = createReadStream(file);

    readStream.on('data', (data) => {
        process.stdout.write(data.toString());
    });

    readStream.on('end', () => {
        process.exit(0);
    });
};

await read();