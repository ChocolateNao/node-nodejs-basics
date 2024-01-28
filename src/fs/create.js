import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    if (fs.existsSync(file)) {
        throw new Error('FS operation failed');
    }

    const content = 'I am fresh and young';
    fs.writeFileSync(file, content);
};

await create();