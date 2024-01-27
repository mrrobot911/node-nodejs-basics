import { Transform, pipeline } from "node:stream";

const transform = async () => {
  const reverseString = new Transform({
    transform(chunk, _, callback) {
      const reversed = chunk
        .toString()
        .replace("\n", "")
        .split("")
        .reverse()
        .join("")
        .concat("\n");

      callback(null, reversed);
    },
  });

  pipeline(process.stdin, reverseString, process.stdout, (err) => {
    throw new Error("Stream operation failed");
  });
};

await transform();
