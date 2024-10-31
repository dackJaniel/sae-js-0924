import { getPost, getUser } from "../utils/data";

async function Post() {
  const app = document.getElementById("app");
  const url = window.location.href;

  const postId = url.split("=").pop();

  const post = await getPost(postId);
  const { data, ok, message } = post;

  if (!ok) {
    app.innerHTML = `
    <div>
      <h1>Error</h1>
      <p>${message}</p>
    </div>
  `;

    throw new Error(message);
  }

  const user = await getUser(post.data.userId);

  const { data: userData, ok: userOk, message: userMessage } = user;

  if (!userOk) {
    app.innerHTML = `
    <div>
      <h1>Error</h1>
      <p>${userMessage}</p>
    </div>
  `;

    throw new Error(userMessage);
  }

  app.innerHTML = `
    <div>
      <h1>${data.title}</h1>
      <small class="text-sm">${userData.name}</small>
      <p>
          ${data.body}
      </p>
    </div>
`;
}

Post();
