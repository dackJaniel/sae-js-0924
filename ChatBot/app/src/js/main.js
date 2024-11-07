import "../css/style.css";

import axios from "axios";

const form = document.querySelector("#chat-form");
const messages = document.querySelector("#messages");

function submitAction(e) {
  e.preventDefault();

  const data = new FormData(form);
  const input = data.get("input");

  renderMessage(input, "Benutzer");
  getAnswer(input);
}

function renderMessage(message, role = "Benutzer") {
  if (!message) {
    console.error("Message is empty.");
    return;
  }

  messages.innerHTML += `
      <div class="w-2/3 bg-white p-5 rounded-md  ${
        role === "Benutzer" ? "self-end" : "self-start"
      }">
        <span class="text-gray-500 text-sm">${role}</span>
        <p>${message}</p>
      </div>`;
}

async function getAnswer(message) {
  if (!message) {
    console.error("Message is empty.");
    return;
  }

  try {
    const res = await axios.post("http://localhost:3000/api/chat", {
      message,
    });

    if (!res) {
      console.log(res);
      throw new Error("Data not found.");
    }

    renderMessage(res.data.message.content, "ChatGPT");
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener("submit", (e) => submitAction(e));
