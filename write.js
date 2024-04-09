import util from "node:util";
import fs from "node:fs";
const path = "./test.txt";

/*
fs.writeSync(fd, buffer[, options])                 // return bytes written
fs.writeSync(fd, string[, position[, encoding]])    // return bytes written
fs.write(fd, buffer[, options], callback)
fs.write(fd, string[, position[, encoding]], callback)

options: offset, length, position
callback: (err, written, buffer)
*/

const input = "OFFSET This file has been overwritten!";
const string = input.slice(7);
const buf = Buffer.from(input, "utf8");
const offset = 7;

// write string synchronously
export var writeStringSync = (path, string) => {
  console.log("\nfs.writeSync() write string synchronously");
  let fd1 = fs.openSync(path, "rs+");
  console.log(`file (${fd1}) opened!`);
  let bytesWritten1 = fs.writeSync(fd1, string, "utf8"); // no offset option
  console.log(`bytes written: ${bytesWritten1}`);
  console.log("file overwritten!");
  fs.closeSync(fd1);
  console.log(`file (${fd1}) close!`);
};
writeStringSync(path, string);

// write buffer synchronously
export var writeBufferSync = (path, buf, offset) => {
  console.log("\nfs.writeSync() write buffer synchronously");
  let fd2 = fs.openSync(path, "rs+");
  console.log(`file (${fd2}) opened!`);
  let bytesWritten2 = fs.writeSync(fd2, buf, offset);
  console.log(`bytes written: ${bytesWritten2}`);
  console.log("file overwritten!");
  fs.closeSync(fd2);
  console.log(`file (${fd2}) close!`);
};
writeBufferSync(path, buf, offset);

// write string asynchronously
export var writeStringAsync = (path, string) => {
  console.log("\nfs.write() write string asynchronously");
  fs.open(path, "w", (err, fd) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`file (${fd}) opened!`);
      fs.write(fd, string, "utf8", (err, bytesWritten) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`bytes written: ${bytesWritten}`);
          console.log("file overwritten!");
          fs.close(fd, () => {
            console.log(`file (${fd}) close!`);
          });
        }
      });
    }
  });
};
writeStringAsync(path, string);

// write buffer asynchronously
export var writeBufferAsync = (path, buf, offset) => {
  console.log("\nfs.write() write buffer asynchronously");
  fs.open(path, "w", (err, fd) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`file (${fd}) opened!`);
      fs.write(fd, buf, offset, (err, bytesWritten) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`bytes written: ${bytesWritten}`);
          console.log("file overwritten!");
          fs.close(fd, () => {
            console.log(`file (${fd}) close!`);
          });
        }
      });
    }
  });
};
writeBufferAsync(path, buf, offset);

// write string asynchronously with promise
export var writeStringPromise = (path, string) => {
  console.log("\nfs.write() write string asynchronously with promise");
  const open = util.promisify(fs.open);
  const write = util.promisify(fs.write);
  const close = util.promisify(fs.close);
  open(path, "w").then((fd) => {
    console.log(`file (${fd}) opened!`);
    return write(fd, string).then((bytesWritten) => {
      console.log(`bytes written: ${bytesWritten}`);
      console.log("file overwritten!");
      return close(fd).then(() => {
        console.log(`file (${fd}) close!`);
      });
    });
  });
};
writeStringPromise(path, string);

// write buffer asynchronously with promise
export var writeBufferPromise = (path, buffer, offset) => {
  console.log("\nfs.write() write buffer asynchronously with promise");
  const open = util.promisify(fs.open);
  const write = util.promisify(fs.write);
  const close = util.promisify(fs.close);
  open(path, "w").then((fd) => {
    console.log(`file (${fd}) opened!`);
    return write(fd, buffer, offset).then((bytesWritten) => {
      console.log(`bytes written: ${bytesWritten}`);
      console.log("file overwritten!");
      return close(fd).then(() => {
        console.log(`file (${fd}) close!`);
      });
    });
  });
};
writeBufferPromise(path, buf, offset);
