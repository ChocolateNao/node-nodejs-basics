import fs from 'fs'
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToCompress.txt');
const archive = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const gzip = zlib.createGzip();
    const fileRStream = fs.createReadStream(file);
    const archiveWStream = fs.createWriteStream(archive);

    pipeline(fileRStream, gzip, archiveWStream, (err) => {
        if (err) {
            throw new Error(`An error occurred: ${err}`);
        }
    });
};

await compress();