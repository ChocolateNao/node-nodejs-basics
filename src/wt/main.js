import os from 'os';
import path from 'path';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerFile = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const cpus = os.cpus().length;
    const results = [];

    const workerTask = (data) => {
        return new Promise((resolve) => {
            const worker = new Worker(workerFile, { workerData: data });

            worker.on("message", (value) => {
                const data = { status: "resolved", data: value };
                resolve(data);
            });

            worker.on("error", () => {
                const data = { status: "error", data: null };
                resolve(data);
            });
        });
    }

    for (let i = 0; i < cpus; i++) {
        results.push(workerTask(i + 10));
    }

    Promise.all(results).then((value) => console.log(value));
};

await performCalculations();