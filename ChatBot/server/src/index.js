import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const OPEN_AI_KEY = process.env.OPEN_AI_KEY;

if (!PORT) {
  console.error("PORT is not defined");
  process.exit(1);
}

if (!HOST) {
  console.error("HOST is not defined");
  process.exit(1);
}

if (!OPEN_AI_KEY) {
  console.error("OPEN_AI_KEY is not defined");
  process.exit(1);
}

const server = express();
const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
});

server.use(express.json());
server.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    optionsSuccessStatus: 200,
  })
);

server.post("/api/chat", async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Message is required" });
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Du bist ein hilfreicher Assistent. Gib maximal 2 Sätze mit ingesammt 20 Wörtern zurück.",
      }, // Prompt Engineering
      {
        role: "user",
        content: req.body.message,
      },
    ],
  });
  if (completion.choices[0].message.refusal !== null) {
    res.status(400).json({ message: "Fehler ist aufgetreten." });
  }
  res.status(200).json({ message: completion.choices[0].message });
});

async function name(params) {}

server.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT} and host ${HOST}`);
});
