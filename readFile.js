import fs, { readFile } from "node:fs";
const path = "./test.txt";

/*
fs.readFileSync(path[, options])            // return content of path
fs.readFile(path[, options], callback)
options: encoding, flag
callback: (err, data) => {}
*/

// readFile synchronously
export var readFileSync = (path) => {
  console.log("\nfs.readFileSync() read synchronously");
  let data = fs.readFileSync(path, "utf8");
  console.log(`content: ${data}`);
  return data;
};
readFileSync(path);

// readFile with promise
export var readFilePromise = async (path) => {
  console.log("\nfs.promises.readFile() read asynchronously with promise");
  return fs.promises
    .readFile(path, "utf8")
    .then((data) => {
      console.log(`content: ${data}`);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};
await readFilePromise(path);

// readFile with callback
export var readFileAsync = (path, callback) => {
  console.log("\nfs.readFile() read asynchronously with callback");
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      callback(err, null); // return error to callback
    } else {
      callback(null, data); // pass the content to callback
    }
  });
};
readFileAsync(path, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`content: ${data}`);
  }
});
