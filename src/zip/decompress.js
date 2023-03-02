import * as zlib from "node:zlib";
import * as fs from "node:fs";

const decompress = async () => {
    const unzip = zlib.createUnzip();
    const input = fs.createReadStream("src/zip/files/archive.gz");
    const output = fs.createWriteStream("src/zip/files/fileToCompress.txt");

    input.pipe(unzip).pipe(output);
};

await decompress();