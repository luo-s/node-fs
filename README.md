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
