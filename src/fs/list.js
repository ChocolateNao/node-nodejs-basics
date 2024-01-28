import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { readdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'files');

const list = async () => {
    try {
        if (!existsSync(dir)) {
            throw new Error('FS operation failed');
        }

        const files = await readdir(dir);
        console.log(files);
    } catch (error) {
        console.error(error);
    }
};

await list();