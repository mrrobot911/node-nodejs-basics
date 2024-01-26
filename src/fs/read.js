import fs from "node:fs";
import { createPathName } from "../utils/pathName.js";
import { fileURLToPath } from "node:url";
import { isExists } from "../utils/isExist.js";

const __filename = fileURLToPath(import.meta.url);
const sorcePath = await createPathName(__filename, "files", "fileToRead.txt");

const read = async (sorcePath) => {
  if (!(await isExists(sorcePath))) {
    throw new Error("fs operation failed");
  }
  const stream = fs.createReadStream(sorcePath, { encoding: "utf8" });
  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read(sorcePath);
