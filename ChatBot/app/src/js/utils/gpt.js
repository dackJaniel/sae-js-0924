export async function getAnswer(message) {
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
