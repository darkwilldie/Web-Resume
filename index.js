const btn = document.getElementById("toggle-dark");
var hasDarks = document.querySelectorAll(".has-dark, section");
btn.onclick = function () {
  const body = document.body;
  if (body.getAttribute("data-bs-theme") === "dark") {
    body.setAttribute("data-bs-theme", "light");
    btn.textContent = "☀";
  } else {
    body.setAttribute("data-bs-theme", "dark");
    btn.textContent = "⏾";
  }
  for (var i = 0; i < hasDarks.length; i++) {
    hasDarks[i].classList.toggle("dark");
  }
};
