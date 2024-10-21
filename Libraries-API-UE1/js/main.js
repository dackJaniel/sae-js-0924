// console.log("This is a message!");

// fetch("https://jsonplaceholder.org/psts")
//   .then((respronse) => {
//     return respronse.json();
//   })
//   .then((data) => {
//     if (!data) {
//       throw new Error("No data found");
//     }

//     data.forEach((element) => {
//       console.log(element.title);

//       const div = document.createElement("div");

//       const p = "<p>" + element.title + "</p>";
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// console.log("This is another message!");

async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.org/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

// getPosts();

const data = [
  { name: "John Doe", age: 30, city: "New York", isEmployed: true },
  { name: "John Doe", age: 30, city: "New York", isEmployed: true },
  { name: "John Doe", age: 30, city: "New York", isEmployed: true },
];

// const json = JSON.stringify(data);
// console.log(json);

// const arr = JSON.parse(json);
// console.log(arr);

async function postData(data) {
  try {
    const response = await fetch("https://jsonplaceholder.org/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

postData(data);
