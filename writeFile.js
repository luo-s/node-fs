import fs from "node:fs";
const path = "./test.txt";

// fs.writeFileSync(file, data[, options])
// fs.writeFile(file, data[, options], callback)
// they can both take a string or buffer as data input
// no offset option
const input = "OFFSET This file has been overwritten!";
const string = input.slice(7);
const buf = Buffer.from(input.slice(7), "utf8");

// writeFile synchronously
export var writeFileSync = (path, data) => {
  console.log("\nfs.readFileSync() read synchronously");
  console.log("no need to open and close file");
  fs.writeFileSync(path, data, "utf8");
  console.log("file overwritten!");
};
writeFileSync(path, string.slice(7));

// writeFile asynchronously with callback
export var writeFileAsync = (path, data) => {
  console.log("\nfs.writeFile() write asynchronously");
  console.log("no need to open and close file");
  fs.writeFile(path, data, "utf8", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("file overwritten!");
    }
  });
};
writeFileAsync(path, buf);

// writeFile with promise
export var writeFilePromise = (path, data) => {
  console.log("\nfs.promises.writeFile() write asynchronously with promise");
  console.log("no need to open and close file");
  fs.promises
    .writeFile(path, data, "utf8")
    .then(() => {
      console.log("file overwritten!");
    })
    .catch((err) => {
      console.error(err);
    });
};
writeFilePromise(path, buf);
