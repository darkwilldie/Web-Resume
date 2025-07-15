const $navbar = $(".navbar");
const $btn = $("#toggle-dark");
const $hasDarks = $(".has-dark, section");

$btn.on("click", function () {
  $hasDarks.toggleClass("dark");
  const $body = $("body");
  if ($body.attr("data-bs-theme") === "dark") {
    $navbar
      .removeClass("navbar-dark bg-dark")
      .addClass("navbar-light bg-light");
    $body.attr("data-bs-theme", "light");
    $btn.text("☀");
  } else {
    $navbar
      .removeClass("navbar-light bg-light")
      .addClass("navbar-dark bg-dark");
    $body.attr("data-bs-theme", "dark");
    $btn.text("⏾");
  }
});
