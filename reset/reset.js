import fs from "node:fs";
const path = "./test.txt";
const string = "This is a test file.";

// write synchronously with string
export var reset = (path, data) => {
  fs.writeFileSync(path, data, "utf8");
  console.log("file reset!");
};
reset(path, string);
