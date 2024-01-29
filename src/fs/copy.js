import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { cp } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const initFolder = path.join(__dirname, 'files');
const endFolder = path.join(__dirname, 'files_copy');

const copy = async () => {
    try {
        if (!existsSync(initFolder) || existsSync(endFolder)) {
            throw new Error('FS operation failed');
        }

        await cp(initFolder, endFolder, { recursive: true });
    } catch (error) {
        console.error(error);
    }

};

await copy();
