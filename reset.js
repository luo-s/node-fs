import fs from "node:fs";
const path = "./test.txt";
const string = "This is a test.";

// write synchronously with string
let fd = fs.openSync(path, "w");
let bytesWritten = fs.writeSync(fd, string, "utf8");
console.log("file reset!");
fs.closeSync(fd);
