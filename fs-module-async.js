const { readFile, writeFile } = require("fs");
const { join } = require("path");

const firstPath = join(__dirname, "content", "first.txt");
const secondPath = join(__dirname, "content", "second.txt");

readFile(firstPath, "utf8", (err, result) => {
  if (err) {
    console.log("error: ", err);
    return;
  }
  const first = result;
  readFile(secondPath, "utf8", (err, result) => {
    if (err) {
      console.log("error: ", err);
      return;
    }
    const second = result;
    writeFile(
      join(__dirname, "content", "result-async.txt"),
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log("error: ", err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
