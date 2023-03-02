import path from "node:path";
import * as fs from "node:fs";
import process from "node:process";

const { createHmac } = await import("node:crypto");

const calculateHash = async () => {
    const directory = path.relative(process.cwd(), "src/hash/files/fileToCalculateHashFor.txt");

    fs.readFile(directory, 'utf8', (err, data) => {
        if (err) throw err;

        const hash = createHmac("sha256", data).digest("hex");
        console.log(hash);
    })
};

await calculateHash();
