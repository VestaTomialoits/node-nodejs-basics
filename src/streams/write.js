import * as fs from "node:fs";
import * as process from "node:process";
import path from "node:path";

const write = async () => {
    const relativePath = path.relative(process.cwd(), "src/streams/files/fileToWrite.txt");
    const stream = fs.createWriteStream(relativePath);

    process.stdin.pipe(stream);
};

await write();