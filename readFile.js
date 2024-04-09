import fs, { readFile } from "node:fs";
const path = "./test.txt";

// readFile synchronously
export var readFileSync = (path) => {
  console.log("\nfs.readFileSync() read synchronously");
  console.log("no need to open and close file");
  let data = fs.readFileSync(path, "utf8");
  console.log(`content: ${data}`);
};
readFileSync(path);

// readFile with callback
export var readFileAsync = (path) => {
  console.log("\nfs.readFile() read asynchronously with callback");
  console.log("no need to open and close file");
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`content: ${data}`);
    }
  });
};
readFileAsync(path);

// readFile with promise
export var readFilePromise = (path) => {
  console.log("\nfs.promises.readFile() read asynchronously with promise");
  console.log("no need to open and close file");
  fs.promises
    .readFile(path, "utf8")
    .then((data) => {
      console.log(`content: ${data}`);
    })
    .catch((err) => {
      console.error(err);
    });
};
readFilePromise(path);
