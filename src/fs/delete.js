import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    if (!fs.existsSync(file)) {
        throw new Error('FS operation failed');
    }

    fs.rmSync(file);
};

await remove();