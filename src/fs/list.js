import fs from "node:fs/promises";
import { createPathName } from "../utils/pathName.js";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = await createPathName(__filename, "files");

const list = async () => {
  await fs
    .readdir(__dirname)
    .then((items) => console.log(items))
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await list();
