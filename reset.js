import fs from "node:fs";
const path = "./test.txt";
const string = "This is a test file.";

// write synchronously with string
export var reset = (path, data) => {
  let fd = fs.openSync(path, "w");
  let bytesWritten = fs.writeSync(fd, data, "utf8");
  console.log("file reset!");
  fs.closeSync(fd);
};
reset(path, string);
