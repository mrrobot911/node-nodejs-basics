import fs from "node:fs/promises";
import { createPathName } from "../utils/pathName.js";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const fileToRemove = await createPathName(
  __filename,
  "files",
  "fileToRemove.txt"
);

const remove = async () => {
  try {
    await fs.unlink(fileToRemove);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
