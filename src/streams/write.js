import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { createPathName } from "../utils/pathName.js";

const __filename = fileURLToPath(import.meta.url);
const destPath = await createPathName(__filename, "files", "fileToWrite.txt");

const write = async (destPath) => {
  const writeStream = fs.createWriteStream(destPath);
  process.stdin.on("data", (chunk) => {
    writeStream.write(chunk);
  });
};

await write(destPath);
