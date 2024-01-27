import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createPathName } from "../utils/pathName.js";

const __filename = fileURLToPath(import.meta.url);
const sorcePath = await createPathName(__filename, "files", "script.js");

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [sorcePath, ...args], {
    stdio: ["pipe", "pipe", "inherit", "ipc"],
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
};

spawnChildProcess([1, "2", "three"]);
