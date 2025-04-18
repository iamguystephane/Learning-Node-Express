const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello, and welcome to our home page!");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history!");
    return;
  }
  if (req.url === "/contact") {
    res.end("Here is our contact page!");
    return;
  }
  res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `);
});

server.listen(5000, () => {
  console.log("Server is listening on http://localhost:5000");
});
