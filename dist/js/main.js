const btn = window.document.querySelector('[data-js="input"]');
btn.addEventListener("click", () => {
  window.document.body.classList.toggle("dark-theme");
});
