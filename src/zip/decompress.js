import fs from 'fs'
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileDecompressed.txt');
const archive = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
    const gzip = zlib.createUnzip();
    const archiveRStream = fs.createReadStream(archive);
    const fileWStream = fs.createWriteStream(file);

    pipeline(archiveRStream, gzip, fileWStream, (err) => {
        if (err) {
            throw new Error(`An error occurred: ${err}`);
        }
    });
};

await decompress();