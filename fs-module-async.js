const { readFile, writeFile } = require("fs");
const { join } = require("path");

console.log("start");
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

console.log("Starting the next one");
// Note: This code is asynchronous, so it will not block the event loop. The next console.log will run before the file operations are complete.