import fs from "node:fs";
import {
  writeFileSync,
  writeFileAsync,
  writeFilePromise,
} from "../writeFile.js";

const pathTest = "./test.txt";
const testString = "test! test! test!";
const testBuffer = Buffer.from(testString, "utf8");

// test writeFileSync
describe("writeFileSync", () => {
  test("should overwrite the content of file", () => {
    writeFileSync(pathTest, testString);
    const data = fs.readFileSync(pathTest, "utf8");
    expect(data).toBe(testString);
  });
});

// test writeFilePromise
describe("writeFilePromise", () => {
  test("should overwrite the content of file", async () => {
    const data = await writeFilePromise(pathTest, testBuffer);
    expect(data).toBe(testString);
  });
  test("should overwrite the content of file", () => {
    return expect(writeFilePromise(pathTest, testBuffer)).resolves.toBe(
      testString
    );
  });
});

// test writeFileAsync
describe("readFileAsync", () => {
  test("should overwrite the content of file", (done) => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toBe(testString);
        done();
      } catch (error) {
        done(error);
      }
    }
    writeFileAsync(pathTest, testBuffer, callback);
  });
});
