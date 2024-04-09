import fs from "node:fs";
const path1 = "./stream.txt";
const path2 = "./test.txt";

/*
fs.createReadStream(path[, options])
fs.createWriteStream(path[, options])

const defaultOptionsRS = {
  flags: "r",
  encoding: null,
  fd: null,
  mode: 0o666,
  autoClose: true,
  start: 0,
  end: Infinity,
  highWaterMark: 64 * 1024, (65536 or 64KiB)
  fs: null,
  signal: null,
};

const defaultOptionsWS = {
  flags: "w",
  encoding: null,
  fd: null,
  mode: 0o666,
  autoClose: true,
  start: 0,
  highWaterMark: 16 * 1024, (16384 or 16KiB)
  fs: null,
  signal: null,
  flush: false,
}
*/

export var readStream = (path, chunkByte) => {
  const rStream = fs.createReadStream(path, { highWaterMark: chunkByte }); // return fs.ReadStream object
  rStream.on("data", (chunk) => {
    console.log("----- NEW CHUNK -----");
    console.log(chunk.toString()); // chunk is a buffer
  });
};
readStream(path1, 500);

export var writeStream = (source, destination, chunkByte) => {
  const rStream = fs.createReadStream(source, { highWaterMark: chunkByte });
  const wStream = fs.createWriteStream(destination, {
    highWaterMark: chunkByte,
  });
  rStream.on("data", (chunk) => {
    console.log("----- NEW CHUNK -----");
    console.log(chunk.toString()); // chunk is a buffer
    wStream.write(chunk);
  });
};
writeStream(path1, path2, 500);

export var writeFromFile = (source, destination) => {
  const rStream = fs.createReadStream(source);
  const wStream = fs.createWriteStream(destination);
  rStream.pipe(wStream);
};
writeFromFile(path1, path2);
