import "../css/style.css";

import axios from "axios";

async function getTest() {
  try {
    const res = await axios.get("http://localhost:3000/");

    if (!res) {
      console.log(res);
      throw new Error("Data not found.");
    }

    console.log(res.data.message);
  } catch (error) {
    console.error(error);
  }
}

getTest();
