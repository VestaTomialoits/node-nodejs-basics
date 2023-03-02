import * as fs from "node:fs";
import * as process from "node:process";
import * as path from "node:path";

const remove = async () => {
    const relativePath = path.relative(process.cwd(), "src/fs/files/fileToRemove.txt");

    fs.unlink(relativePath, (error) => {
        if (error) {
            throw new Error("FS operation failed");
        }
    })
};

await remove();
