import fs from "node:fs";
import { reset } from "../reset.js";

const pathTest = "./test.txt";
const defaultString = "This is a test file.";
const testString =
  "This is a test file. This is a test file. This is a test file.";

// test reset
describe("reset", () => {
  test("should reset the file", () => {
    fs.writeFileSync(pathTest, testString, "utf8");
    expect(fs.readFileSync(pathTest, "utf8")).toBe(testString);
    reset(pathTest, defaultString);
    expect(fs.readFileSync(pathTest, "utf8")).toBe(defaultString);
  });
});
