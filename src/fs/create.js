import * as fs from "node:fs";
import * as process from "node:process";
import * as path from "node:path";

const create = async () => {
    const data = new Uint8Array(Buffer.from('I am fresh and young'));
    const directory = path.relative(process.cwd(), "src/fs/files/fresh.txt");

    fs.writeFile(directory, data, (error) => {
        if (error) throw error;
    })

    fs.stat(directory, (error) => {
        if (error == null) {
            throw new Error("FS operation failed")
        }
    })
};

await create();