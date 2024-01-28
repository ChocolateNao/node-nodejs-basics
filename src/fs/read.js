import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        if (!existsSync(file)) {
            throw new Error('FS operation failed');
        }

        const data = await readFile(file);
        console.log(data.toString());
    } catch (error) {
        console.error(error);
    }
}

await read();