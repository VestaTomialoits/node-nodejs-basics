import * as process from "node:process";
import { Transform } from "node:stream";

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse().toString());
        },
    });

    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
