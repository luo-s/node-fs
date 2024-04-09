import util from "node:util";
import fs from "node:fs";
const path = "./test.txt";

// using "a" and "as" flag to append

/*
fs.writeSync(fd, buffer[, options])                 // return bytes written
fs.writeSync(fd, string[, position[, encoding]])    // return bytes written
fs.write(fd, buffer[, options], callback)
fs.write(fd, string[, position[, encoding]], callback)

options: offset, length, position
callback: (err, written, buffer)
*/

const input = "OFFSET \nThis file has been appended!";
const string = input.slice(7);
const buf = Buffer.from(input, "utf8");
const offset = 7;

// append string synchronously
export var appendStringSync = (path, string) => {
  console.log("\nfs.writeSync() append string synchronously");
  let fd1 = fs.openSync(path, "as");
  console.log(`file (${fd1}) opened!`);
  let bytesWritten1 = fs.writeSync(fd1, string, "utf8"); // no offset option
  console.log(`bytes appended: ${bytesWritten1}`);
  console.log("file appended!");
  fs.closeSync(fd1);
  console.log(`file (${fd1}) close!`);
};
appendStringSync(path, string);

// append buffer synchronously
export var appendBufferSync = (path, buf, offset) => {
  console.log("\nfs.writeSync() append buffer synchronously");
  let fd2 = fs.openSync(path, "as");
  console.log(`file (${fd2}) opened!`);
  let bytesWritten2 = fs.writeSync(fd2, buf, offset);
  console.log(`bytes appended: ${bytesWritten2}`);
  console.log("file appended!");
  fs.closeSync(fd2);
  console.log(`file (${fd2}) close!`);
};
appendBufferSync(path, buf, offset);

// append string asynchronously
export var appendStringAsync = (path, string) => {
  console.log("\nfs.write() append string asynchronously");
  fs.open(path, "a", (err, fd) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`file (${fd}) opened!`);
      fs.write(fd, string, "utf8", (err, bytesWritten) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`bytes appended: ${bytesWritten}`);
          console.log("file appended!");
          fs.close(fd, () => {
            console.log(`file (${fd}) close!`);
          });
        }
      });
    }
  });
};
appendStringAsync(path, string);

// append buffer asynchronously
export var appendBufferAsync = (path, buf, offset) => {
  console.log("\nfs.write() append buffer asynchronously");
  fs.open(path, "a", (err, fd) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`file (${fd}) opened!`);
      fs.write(fd, buf, offset, (err, bytesWritten) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`bytes appended: ${bytesWritten}`);
          console.log("file appended!");
          fs.close(fd, () => {
            console.log(`file (${fd}) close!`);
          });
        }
      });
    }
  });
};
appendBufferAsync(path, buf, offset);

// append string asynchronously with promise
export var appendStringPromise = (path, string) => {
  console.log("\nfs.write() append string asynchronously with promise");
  const open = util.promisify(fs.open);
  const write = util.promisify(fs.write);
  const close = util.promisify(fs.close);
  open(path, "a").then((fd) => {
    console.log(`file (${fd}) opened!`);
    return write(fd, string).then((bytesWritten) => {
      console.log(`bytes appended: ${bytesWritten}`);
      console.log("file appended!");
      return close(fd).then(() => {
        console.log(`file (${fd}) close!`);
      });
    });
  });
};
appendStringPromise(path, string);

// append buffer asynchronously with promise
export var appendBufferPromise = (path, buffer, offset) => {
  console.log("\nfs.write() append buffer asynchronously with promise");
  const open = util.promisify(fs.open);
  const write = util.promisify(fs.write);
  const close = util.promisify(fs.close);
  open(path, "a").then((fd) => {
    console.log(`file (${fd}) opened!`);
    return write(fd, buffer, offset).then((bytesWritten) => {
      console.log(`bytes appended: ${bytesWritten}`);
      console.log("file appended!");
      return close(fd).then(() => {
        console.log(`file (${fd}) close!`);
      });
    });
  });
};
appendBufferPromise(path, buf, offset);
