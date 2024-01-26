import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { isExists } from "../utils/isExist.js";
import { createPathName } from "../utils/pathName.js";

const __filename = fileURLToPath(import.meta.url);
const name = await createPathName(__filename, "files", "fresh.txt");

const create = async (name) => {
  if (await isExists(name)) {
    throw new Error("fs operation failed");
  }
  const writeStream = fs.createWriteStream(name);
  writeStream.end("I am fresh and young", "utf-8");
};

await create(name);
