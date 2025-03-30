const fs = require("fs");
const path = require("path");

// platform-independent way to get file paths
const firstPathname = path.join(__dirname, "content", "first.txt")
const secondPathname = path.join(__dirname, "content", "second.txt");

// reading files synchronously
const first = fs.readFileSync(firstPathname, "utf8");
// __dirname is a global variable that gives the path to the current directory
const second = fs.readFileSync(secondPathname, "utf8");

console.log(first, second);

// writing files synchronously
fs.writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`, {
    flag: 'a'   // appends text to file, rather than overwriting it by default.
  }
);
console.log("done with this task");