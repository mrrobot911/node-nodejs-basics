import fs from "node:fs/promises";

export const isExists = async (path) =>
  await fs
    .stat(path)
    .then(() => true)
    .catch(() => false);
