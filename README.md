# Introduction

- This is a simple tutorial for open, close, read, and write files using node's built-in module: fs. The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.

- `read.js` introduces 3 different ways to fs.read(). When using `read.js()`, we have to manually open and close a file (`file.open()`, `file.close()`).

  - `readSync(path)`: read a file synchronously.
  - `readAsync(path)`: read a file asynchronously with a callback function.
  - `readPromise(path)`: read a file asynchronously with a promise.

- `readFile.js` introduces 3 different ways to utilize `fs.readFile()`. In contrast to `fs.read()`, `fs.readFile()` open and close file automatically.

  - `readFileSync(path)`: read a file synchronously.
  - `readFileAsync(path)`: read a file asynchronously with a callback function.
  - `readFilePromise(path)`: read a file asynchronously with a promise.

- `write.js` introduces 6 different ways to utilize `fs.write()`. Half of them are dealing with writing string into files; the other half are dealing with writing buffer into files. Dealing with string is easier but writing buffer provides more customized options.

  - `writeStringSync(path, string)`: write string synchronously.
  - `writeBufferSync(path, buf, offset)`: write buffer synchronously.
  - `writeStringAsync(path, string)`: write string asynchronously.
  - `writeBufferAsync(path, buf, offset)`: write buffer asynchronously.
  - `writeStringPromise(path, string)`: write string asynchronously with a promise.
  - `writeBufferPromise(path, buf, offset)`: write buffer asynchronously with a promise.

- `writeFile.js` introduces 3 different ways to utilize `fs.writeFile()`. In contrast to `fs.write()`, `fs.writeFile()` open and close file automatically.

  - `writeFileSync(path)`: write a file synchronously.
  - `writeFileAsync(path)`: write a file asynchronously with a callback function.
  - `writeFilePromise(path)`: write a file asynchronously with a promise.

- `reset.js` resets test.txt file back to the default ("This is a test.")
