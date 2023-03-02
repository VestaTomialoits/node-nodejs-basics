import * as zlib from "node:zlib";
import * as fs from "node:fs";

const compress = async () => {
    const gzip = zlib.createGzip();
    const input = fs.createReadStream("src/zip/files/fileToCompress.txt");
    const output = fs.createWriteStream("src/zip/files/archive.gz");

    input.pipe(gzip).pipe(output);
};

await compress();