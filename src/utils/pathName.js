import path from "node:path";

export const createPathName = async (__filename, ...args) => {
  const name = path.dirname(__filename);
  return path.join(name, ...args);
};
