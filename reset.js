import fs from "node:fs";
// import { readSync } from "./read.js";
const path = "./test.txt";
const string = "This is a test.";

// write synchronously with string
console.log("\nfs.writeSync() write string synchronously");
let fd = fs.openSync(path, "w");
console.log(`file (${fd}) opened!`);

let bytesWritten = fs.writeSync(fd, string, "utf8");
console.log(`bytes written: ${bytesWritten}`);

fs.closeSync(fd);
console.log(`file (${fd}) close!`);
