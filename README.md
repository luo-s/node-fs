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

- `append.js` is similar to `write.js`, introducing 6 different functions to append files. It is exactly the same method, but with different file system flags (`a`/`as` instead of `w`/`rs+`).

  - `appendStringSync(path, string)`: append string synchronously.
  - `appendBufferSync(path, buf, offset)`: append buffer synchronously.
  - `appendStringAsync(path, string)`: append string asynchronously.
  - `appendBufferAsync(path, buf, offset)`: append buffer asynchronously.
  - `appendStringPromise(path, string)`: append string asynchronously with a promise.
  - `appendBufferPromise(path, buf, offset)`: append buffer asynchronously with a promise.

- `appendFile.js` introduces 3 different ways to utilize `fs.appendFile()`. In contrast to `fs.writeFile()` and `fs.write()`, `fs.appendFile()` append file instead of overwritting it.

  - `appendFileSync(path, data)`: append a file synchronously.
  - `appendFileAsync(path, data)`: append a file asynchronously with a callback function.
  - `appendFilePromise(path, data)`: append a file asynchronously with a promise.

- `stream.js` introduces async functions that read and write data streamingly (chunk by chunk). Reading and writing files could be stressful and potentially slow down the programming due to processing large files. It is important that processing large files streamingly, piece by piece, to improve memory efficiency and performance, and aviod block other tasks in the Node.js event loop. Also, streaming method in Node.js integrates seamlessly with piping machanisms.

  - `readStream(path, chunkByte)`: read a file streamingly with a customized chuck size.
  - `writeStream(source, destination, chunkByte)`: overwrite destination file with the source file streamingly, with a customized chunk size.
  - `writeFromFile(source, destination)`: overwrite destination file with the source file streamingly with piping machanisms.

- `reset.js` resets test.txt file back to the default ("This is a test.")

# How to Use

1. Fork the project in your repository.
2. Clone the forked repo in your local system.
3. Install the project (`npm install`).
4. Now you are free to explore pre-written functions. You can either copy or customize your own node:fs functions.

- `npm run read` will run `read.js` and read `test.txt` file.
- `npm run readFile` will run `readFile.js` and read `test.txt` file.
- `npm run write` will run `write.js` and write `test.txt` file.
- `npm run writeFile` will run `writeFile.js` and write `test.txt` file.
- `npm run append` will run `append.js` and append `test.txt` file.
- `npm run appendFile` will run `appendFile.js` and append `test.txt` file.
- `npm run stream` will run `stream.js`, read `stream.txt` and write it into `test.txt`.
- `npm run reset` will reset `test.txt` back to default.
