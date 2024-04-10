import fs from "node:fs";
import { readFileSync, readFileAsync, readFilePromise } from "../readFile.js";

const pathTest = "./test.txt";
const defaultString = "This is a test file.";

fs.writeFileSync(pathTest, defaultString, "utf8");

// test readFileSync
describe("readFileSync", () => {
  test("should return the content of file", () => {
    const data = readFileSync(pathTest);
    expect(data).toBe(defaultString);
  });
});

// test readFilePromise
describe("readFilePromise", () => {
  test("should return the content of file", async () => {
    const data = await readFilePromise(pathTest);
    expect(data).toBe(defaultString);
  });
  test("should return the content of file", () => {
    return expect(readFilePromise(pathTest)).resolves.toBe(defaultString);
  });
});

// test readFileAsync
describe("readFileAsync", () => {
  test("should return the content of file", (done) => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toBe(defaultString);
        done();
      } catch (error) {
        done(error);
      }
    }
    readFileAsync(pathTest, callback);
  });
});
