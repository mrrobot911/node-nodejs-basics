import fs from "node:fs";
import crypto from "crypto";
import { createPathName } from "../utils/pathName.js";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const sorcePath = await createPathName(
  __filename,
  "files",
  "fileToCalculateHashFor.txt"
);

const calculateHash = async (sorcePath) => {
  const hash = crypto.createHash("sha256");

  const readStream = fs.createReadStream(sorcePath);
  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });
  readStream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log(fileHash);
  });
};

await calculateHash(sorcePath);
