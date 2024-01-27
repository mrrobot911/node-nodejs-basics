import os from "os";
import { Worker } from "worker_threads";
import { fileURLToPath } from "node:url";
import { createPathName } from "../utils/pathName.js";

const __filename = fileURLToPath(import.meta.url);
const sorcePath = await createPathName(__filename, "worker.js");

const performCalculations = async () => {
  const numCores = os.cpus();
  const results = await Promise.allSettled(
    numCores.map((_, i) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(sorcePath, { workerData: i + 10 });

        worker.on("message", (message) => {
          resolve(message);
        });

        worker.on("error", (error) => {
          reject(error);
        });
      });
    })
  );
  return results.map((el) => {
    return el.status == "fulfilled"
      ? { status: "resolved", data: el.value }
      : { status: "error", data: null };
  });
};

await performCalculations(sorcePath).then((results) => console.log(results));
