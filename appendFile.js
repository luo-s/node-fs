import fs from "fs";
const path = "./test.txt";

/*
fs.appendFileSync(path, data[, options])
fs.appendFile(path, data[, options], callback)

they both can take a string or buffer as data input
*/

const input = "OFFSET \nThis file has been appended!";
const string = input.slice(7);
const buf = Buffer.from(input.slice(7), "utf8");

// appendFile synchronously
export var appendFileSync = (path, data) => {
  console.log("\nfs.appendFileSync() append synchronously");
  console.log("no need to open and close file");
  fs.appendFileSync(path, data, "utf8");
  console.log("file appended!");
};
appendFileSync(path, string);

// appendFile asynchronously with promise
export var appendFilePromise = async (path, data) => {
  console.log("\nfs.promises.appendFile() append asynchronously with promise");
  console.log("no need to open and close file");
  return fs.promises
    .appendFile(path, data, "utf8")
    .then(() => {
      console.log("file appended!");
    })
    .catch((err) => {
      console.error(err);
    });
};
await appendFilePromise(path, buf);

// appendFile asynchronously
export var appendFileAsync = (path, data) => {
  console.log("\nfs.appendFile() append asynchronously");
  console.log("no need to open and close file");
  fs.appendFile(path, data, "utf8", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("file appended!");
    }
  });
};
appendFileAsync(path, buf);
