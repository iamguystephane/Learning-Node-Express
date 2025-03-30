

const path = require('path');

console.log(path.sep); // Outputs the platform-specific path separator (e.g., '/' on Unix, '\' on Windows)

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath); // Outputs: /content/subfolder/test.txt (on Unix)

const base = path.basename(filePath);
console.log(base);

const resolvedPath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(resolvedPath); // Outputs the absolute path to the file