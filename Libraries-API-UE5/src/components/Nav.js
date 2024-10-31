export function Nav() {
  const nav = document.getElementById("nav");

  nav.innerHTML = `
    <nav class="w-full flex justify-between gap-2 shadow-md items-center">
        LOGO
        <ul class="flex justify-between gap-2 max-w-2xl items-center m-2">
          <li><a href="/" class="hover:underline">Home</a></li>
        </ul>
      </nav>
  `;
}
