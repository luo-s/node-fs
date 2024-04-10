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
  fs.appendFileSync(path, data, "utf8");
  console.log("file appended!");
};
appendFileSync(path, string);

// appendFile asynchronously with promise
export var appendFilePromise = async (path, data) => {
  console.log("\nfs.promises.appendFile() append asynchronously with promise");
  return fs.promises
    .appendFile(path, data, "utf8")
    .then(() => {
      console.log("file appended!");
      return data.toString();
    })
    .catch((err) => {
      console.error(err);
    });
};
await appendFilePromise(path, buf);

// appendFile asynchronously
export var appendFileAsync = (path, data, callback) => {
  console.log("\nfs.appendFile() append asynchronously");
  fs.appendFile(path, data, "utf8", (err) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.toString());
    }
  });
};
// appendFileAsync(path, buf, (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("file appended!");
//   }
// });
