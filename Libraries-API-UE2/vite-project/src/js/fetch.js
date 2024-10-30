import axios from "axios";

async function getData() {
  try {
    const res = await axios.get("https://jsonplaceholder.org/users");

    if (!res) {
      throw new Error("No RES");
    }
    console.log(res);
  } catch (error) {
    console.error("Wir haben einen Error");
  }
}

getData();

async function sendData() {
  try {
    const res = await axios.post("https://jsonplaceholder.org/users", {
      firstName: "Fred",
      lastName: "Flintstone",
    });

    console.log(res);
  } catch (error) {
    console.error("Wir haben einen Fehler");
  }
}

sendData();
