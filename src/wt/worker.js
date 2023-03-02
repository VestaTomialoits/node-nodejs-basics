import { Worker, isMainThread, parentPort, workerData } from "node:worker_threads";
import { URL, fileURLToPath } from "url";

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const __filename = fileURLToPath(new URL("", import.meta.url));

    if (isMainThread) {
        const worker = new Worker(__filename, {workerData: 10})

        worker.on("message", msg => console.log(`Worker message received: ${msg}`));
        worker.on("error", err => console.error(err));
        worker.on("exit", code => console.log(`Worker exited with code ${code}.`));
    } else {
        const data = workerData;

        parentPort.postMessage(nthFibonacci(data));
    }
};

sendResult();