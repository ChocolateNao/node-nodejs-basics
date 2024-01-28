import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import fsPromises from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const badFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const goodFile = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        if (!existsSync(badFile) || existsSync(goodFile)) {
            throw new Error('FS operation failed');
        }

        await fsPromises.rename(badFile, goodFile);
    } catch (error) {
        console.error(error);
    }
};

await rename();