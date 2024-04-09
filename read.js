import util from "node:util";
import fs from "node:fs";
const path = "./test.txt";

/*
fs.readSync(fd, buffer[, options])          // return bytesRead
fs.read(fd, buffer[, options], callback)

options: offset, length, position
callback: (err, bytesRead, buffer) => {}
*/

let filesize = fs.statSync(path).size;
let buf = Buffer.alloc(filesize);

// read synchronously
export var readSync = (path) => {
  console.log("\nfs.readSync() read synchronously");
  let fd = fs.openSync(path, "rs");
  console.log(`file (${fd}) opened!`);
  let bytesRead = fs.readSync(fd, buf, 0, filesize, 0);
  console.log(`bytes read: ${bytesRead}`);
  console.log(`content: ${buf.toString()}`);
  fs.closeSync(fd);
  console.log(`file (${fd}) close!`);
};
readSync(path);

// read asynchronously with promise
export var readPromise = (path) => {
  console.log("\nRead Asynchronously With Promise");
  const open = util.promisify(fs.open);
  const read = util.promisify(fs.read);
  const close = util.promisify(fs.close);
  open(path, "r").then((fd) => {
    console.log(`file (${fd}) opened!`);
    return read(fd, buf, 0, filesize, 0).then((data) => {
      console.log(`bytes read: ${data.bytesRead}`);
      console.log(`content: ${data.buffer.toString()}`);
      return close(fd).then(() => {
        console.log(`file (${fd}) close!`);
      });
    });
  });
};
readPromise(path);

// read asynchronously with callback
export var readAsync = (path) => {
  console.log("\nRead Asynchronously");
  fs.open(path, "r", (err, fd) => {
    if (err) {
      console.log(`code: ${err.code}\nmessage: ${err.message}`);
    } else {
      console.log(`file (${fd}) opened!`);
      fs.read(fd, buf, 0, filesize, 0, (err, bytesRead, buffer) => {
        if (err) {
          console.log(`code: ${err.code}\nmessage: ${err.message}`);
        } else {
          console.log(`bytes read: ${bytesRead}`);
          console.log(`content: ${buffer.toString()}`);
          fs.close(fd, (err) => {
            if (err) {
              console.log(`code: ${err.code}\nmessage: ${err.message}`);
            } else {
              console.log(`file (${fd}) close!`);
            }
          });
        }
      });
    }
  });
};
readAsync(path);
