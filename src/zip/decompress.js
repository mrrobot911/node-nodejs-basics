import fs from "node:fs";
import { pipeline } from "node:stream";
import { createGunzip } from "node:zlib";
import { createPathName } from "../utils/pathName.js";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const sorcePath = await createPathName(__filename, "files", "archive.gz");
const destPath = await createPathName(
  __filename,
  "files",
  "fileToCompress.txt"
);

const decompress = async () => {
  pipeline(
    fs.createReadStream(sorcePath),
    createGunzip(),
    fs.createWriteStream(destPath),
    (err) => {
      if (err) {
        throw new Error("Stream operation failed");
      }
    }
  );
};

await decompress();
