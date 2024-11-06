import http from "http";
// const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end("Hello World");
  }

  if (req.method === "POST" && req.url === "/users") {
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end("Hello World");
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end("Not Found");
});

server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
