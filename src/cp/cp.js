import * as child_process from "node:child_process";
import { fileURLToPath, URL } from "url";
import path from "node:path";

const spawnChildProcess = async (...args) => {
    const __dirname = fileURLToPath(new URL(".", import.meta.url));
    const childPath = path.join(__dirname, "files/script.js");
    const child = child_process.fork(childPath, args);

    child.on("message", (msg) => {
        console.log("Message:", msg);
    })

};

await spawnChildProcess("test", "hi");
