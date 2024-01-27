import fs from "node:fs/promises";
import { createPathName } from "../utils/pathName.js";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const oldName = await createPathName(__filename, "files", "wrongFilename.txt");
const newName = await createPathName(__filename, "files", "properFilename.md");

const rename = async () => {
  try {
    await fs.rename(oldName, newName);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
