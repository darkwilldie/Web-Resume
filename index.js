const $btn = $("#toggle-dark");
const $hasDarks = $(".has-dark, section");

$btn.on("click", function () {
  $hasDarks.toggleClass("dark");
  const $body = $("body");
  if ($body.attr("data-bs-theme") === "dark") {
    $body.attr("data-bs-theme", "light");
    $btn.text("☀");
  } else {
    $body.attr("data-bs-theme", "dark");
    $btn.text("⏾");
  }
});
