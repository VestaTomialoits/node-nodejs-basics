import os from "node:os";
import { Worker } from "node:worker_threads";
import { fileURLToPath, URL } from "url";
import path from "node:path";

const performCalculations = async () => {
    const systemCpuCores = os.cpus();
    const __dirname = fileURLToPath(new URL(".", import.meta.url));
    const workerPath = path.join(__dirname, "worker.js");
    let i = 10;

    const workerArray = systemCpuCores.map((cpu) => {

        return new Promise((res, rej) => {
            const worker = new Worker(workerPath, {workerData: i++});

            worker.on("message", res);
            worker.on("error", rej);
        })

    });

    Promise.all(workerArray).then(result => {
        const newResult = result.map(item => {
            return {
                data: item || null,
                status: item ? "resolved" : "error"
            };
        });

        return Promise.all(newResult);
    }).then(result => console.log(result));
};

await performCalculations();
