import fs from "node:fs/promises";
import { createPathName } from "../utils/pathName.js";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const sorcePath = await createPathName(__filename, "files");
const destPath = await createPathName(__filename, "files_copy");

const copy = async () => {
  try {
    await fs.cp(sorcePath, destPath, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (err) {
    if (err) throw new Error("FS operation failed");
  }
};

await copy();
