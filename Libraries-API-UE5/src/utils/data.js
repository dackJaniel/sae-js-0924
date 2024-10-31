export async function getPosts() {
  try {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await posts.json();

    if (!posts.ok || !data) {
      throw new Error("No data found");
    }

    return { ok: true, data };
  } catch (error) {
    return { ok: false, message: error.message };
  }
}

export async function getPost(id) {
  if (!id) {
    return { ok: false, message: "No id provided" };
  }

  try {
    const post = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await post.json();

    if (!post.ok || !data) {
      throw new Error("No data found");
    }

    console.log(data);

    return { ok: true, data };
  } catch (error) {
    return { ok: false, message: error.message };
  }
}

export async function getUsers() {
  try {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await users.json();

    if (!users.ok || !data) {
      throw new Error("No data found");
    }

    return { ok: true, data };
  } catch (error) {
    return { ok: false, message: error.message };
  }
}

export async function getUser(id) {
  if (!id) {
    return { ok: false, message: "No id provided" };
  }

  try {
    const user = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await user.json();

    if (!user.ok || !data) {
      throw new Error("No data found");
    }

    return { ok: true, data };
  } catch (error) {
    return { ok: false, message: error.message };
  }
}
