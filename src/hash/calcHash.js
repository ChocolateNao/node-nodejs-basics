import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
import fs from 'fs'
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const readStream = fs.createReadStream(file);
    const hash = createHash('sha256');
    readStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    readStream.on('end', () => {
        console.log(hash.digest('hex'));
    });

    readStream.on('error', (error) => {
        console.error('Error reading file:', error);
    });
};

await calculateHash();