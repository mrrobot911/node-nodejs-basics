import fs from "node:fs/promises";
import { createPathName } from "../utils/pathName.js";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = await createPathName(__filename, "files");

const list = async () => {
  try {
    const items = await fs.readdir(__dirname);
    console.log(items);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
