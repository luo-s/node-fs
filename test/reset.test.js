import fs from "node:fs";
import { reset } from "../reset/reset.js";

const pathTest = "./test.txt";
const pathStream = "./stream.txt";
const defaultString = "This is a test file.";
const testString =
  "This is a test file. This is a test file. This is a test file.";
const testBuffer = Buffer.from(testString);

// test reset
test("reset", () => {
  fs.writeFileSync(pathTest, testString, "utf8");
  expect(fs.readFileSync(pathTest, "utf8")).toBe(testString);
  console.log("bebore reset: ", fs.readFileSync(pathTest, "utf8"));
  reset(pathTest, defaultString);
  expect(fs.readFileSync(pathTest, "utf8")).toBe(defaultString);
  console.log("after reset: ", fs.readFileSync(pathTest, "utf8"));
});
