import * as fs from "node:fs";
import * as process from "node:process";
import * as path from "node:path";

const read = async () => {
    const relativePath = path.relative(process.cwd(), "src/streams/files/fileToRead.txt");
    const chunks = [];
    const stream = fs.createReadStream(relativePath, {start: 0});

    for await (const chunk of stream) {
        chunks.push(Buffer.from(chunk));
    }

    process.stdout.write(Buffer.concat(chunks).toString("utf8"));
};

await read();