import { getPosts, getUsers } from "../utils/data";

async function Posts() {
  const app = document.getElementById("app");

  const posts = await getPosts();

  if (!posts.ok) {
    app.innerHTML = `<p>${posts.message}</p>`;
  }

  const users = await getUsers();

  if (!users.ok) {
    app.innerHTML = `<p>${users.message}</p>`;
  }

  posts.data.forEach((post) => {
    const user = users.data.find((user) => user.id === post.userId);

    console.log(user);

    app.innerHTML += `
      <div class="rounded-md shadow-lg p-3">
        <h3 class="text-2xl font-bold">${post.title}</h3>
        <small class="text-sm">${user.name}</small>
        <p class="text-gray-500">${
          post.body.length >= 20
            ? post.body.substring(0, 20) + "..."
            : post.body
        }</p>
        <a href="/pages/post/?=${
          post.id
        }" class="bg-green-200 inline-block p-2 rounded-md hover:bg-green-400 transition-colors">Zum Post</a>
      </div>
      `;
  });
}

Posts();
