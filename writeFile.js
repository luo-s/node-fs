import fs from "node:fs";
const path = "./test.txt";

/*
fs.writeFileSync(file, data[, options])
fs.writeFile(file, data[, options], callback)

they both can take a string or buffer as data input
*/

const input = "OFFSET This file has been overwritten!";
const string = input.slice(7);
const buf = Buffer.from(input.slice(7), "utf8");

// writeFile synchronously
export var writeFileSync = (path, data) => {
  console.log("\nfs.readFileSync() read synchronously");
  fs.writeFileSync(path, data, "utf8");
  console.log("file overwritten!");
};
writeFileSync(path, string.slice(7));

// writeFile with promise
export var writeFilePromise = async (path, data) => {
  console.log("\nfs.promises.writeFile() write asynchronously with promise");
  return fs.promises
    .writeFile(path, data, "utf8")
    .then(() => {
      console.log("file overwritten!");
      return data.toString();
    })
    .catch((err) => {
      console.error(err);
    });
};
await writeFilePromise(path, buf);

// writeFile asynchronously with callback
export var writeFileAsync = (path, data, callback) => {
  console.log("\nfs.writeFile() write asynchronously");
  fs.writeFile(path, data, "utf8", (err) => {
    if (err) {
      callback(err, null); // return error to callback
    } else {
      callback(null, data.toString()); // pass the content to callback
    }
  });
};
writeFileAsync(path, buf, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("file overwritten!");
  }
});
