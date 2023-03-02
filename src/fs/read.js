import * as fs from "node:fs";
import * as path from "node:path";
import process from "node:process";

const read = async () => {
    const relativePath = path.relative(process.cwd(), "src/fs/files/fileToRead.txt");

    fs.readFile(relativePath,  "utf8", (error, data) => {
        if (error) {
            throw new Error("FS operation failed");
        }

        console.log(data);
    });
};

await read();
