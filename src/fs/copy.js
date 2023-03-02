import * as fs from "node:fs";
import * as path from "node:path";
import * as process from "node:process";

const copy = async () => {
    const relativePathFrom = path.relative(process.cwd(), "src/fs/files");
    const relativePathTo = path.relative(process.cwd(), "src/fs/files_copy");

    fs.cp(
        relativePathFrom,
        relativePathTo,
        { recursive: true, errorOnExist: true, force: false },
        (error
        ) => {
        if (error?.code === "ENOENT" || error) {
            throw new Error("FS operation failed");
        }
    })
};

await copy();
