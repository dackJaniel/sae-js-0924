import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const server = express();

server.use(express.json());
server.use(
  cors({
    origin: ["http://localhost:3000/", "http://127.0.0.1:3000/"], // woher kommt der Anfrage?
    optionsSuccessStatus: 200,
  })
);

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@gmx.de",
  },
];

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

server.post("/", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: "Name is required" });
  }

  res.status(201).json({ message: `Hello ${req.body.name}` });
});

server.get("/users", (req, res) => {
  // DB hole mir alle User
  res.status(200).json(users);
});

server.post("/users", (req, res) => {
  const { id, name, email } = req.body;

  if (!id || !name || !email) {
    return res.status(400).json({ message: "ID, Name and email are required" });
  }

  //   DB insert user
  users.push(req.body);

  res.status(201).json(req.body);
});

server.get("/users/:id", (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Id is required" });
  }

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
});

server.put("/users/:id", (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Id is required" });
  }

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  user.name = name;
  user.email = email;

  res.status(200).json(user);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
