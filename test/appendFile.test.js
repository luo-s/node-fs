import fs from "node:fs";
import {
  appendFileSync,
  appendFilePromise,
  appendFileAsync,
} from "../appendFile.js";

const pathTest = "./test.txt";
const defaultString = "This is a test file.";
const testString = "test! test! test!";
const testBuffer = Buffer.from(testString, "utf8");

fs.writeFileSync(pathTest, defaultString, "utf8");

// test appendFileSync
describe("appendFileSync", () => {
  test("should append the content to the file", () => {
    const before = fs.readFileSync(pathTest, "utf8");
    appendFileSync(pathTest, testString);
    const after = fs.readFileSync(pathTest, "utf8");
    expect(before + testString).toBe(after);
  });
});

// test appendFilePromise
describe("appendFilePromise", () => {
  test("should append the content to the file", async () => {
    const before = fs.readFileSync(pathTest, "utf8");
    const append = await appendFilePromise(pathTest, testBuffer);
    const after = fs.readFileSync(pathTest, "utf8");
    expect(before + append).toBe(after);
  });
  test("should append the content to the file", () => {
    return expect(appendFilePromise(pathTest, testBuffer)).resolves.toBe(
      testString
    );
  });
});

// test appendFileAsync
describe("appendFileAsync", () => {
  test("should append the content to the file", (done) => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        const before = fs.readFileSync(pathTest, "utf8");
        expect(data).toBe(testString);
        done();
      } catch (error) {
        done(error);
      }
    }
    appendFileAsync(pathTest, testBuffer, callback);
  });
});
