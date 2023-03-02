import * as fs from "node:fs";
import * as path from "node:path";
import process from "node:process";

const rename = async () => {
   const relativePathOld = path.relative(process.cwd(), "src/fs/files/wrongFilename.txt");
   const relativePathNew = path.relative(process.cwd(), "src/fs/files/properFilename.md");

   fs.rename(relativePathOld, relativePathNew, (error) => {
      if (error) {
         throw new Error("FS operation failed");
      }
   })
};

await rename();
