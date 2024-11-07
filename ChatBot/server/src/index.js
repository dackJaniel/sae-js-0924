import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

if (!PORT) {
  console.error("PORT is not defined");
  process.exit(1);
}

if (!HOST) {
  console.error("HOST is not defined");
  process.exit(1);
}

const server = express();

server.use(express.json());
server.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    optionsSuccessStatus: 200,
  })
);

server.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT} and host ${HOST}`);
});
