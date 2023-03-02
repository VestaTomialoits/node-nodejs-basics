import * as fs from "node:fs";
import * as path from "node:path";
import process from "node:process";

const list = async () => {
    const relativePath = path.relative(process.cwd(), "src/fs/files");

    fs.readdir(relativePath, (error, files) => {
        if (error) {
            throw new Error("FS operation failed");
        }

        console.log(files);
    })
};

await list();
