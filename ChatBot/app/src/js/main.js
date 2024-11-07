import "../css/style.css";
import { getAnswer } from "./utils/gpt";

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

form.addEventListener("submit", (e) => submitAction(e));
