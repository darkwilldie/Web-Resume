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

let translations = {};

// Fetch translations
async function fetchTranslations() {
  try {
    const response = await fetch("../assets/translation/translation.json");
    translations = await response.json();
    setLang("en"); // Set default language
  } catch (error) {
    console.error("Error fetching translations:", error);
  }
}

// Set language
function setLang(lang) {
  if (!translations[lang]) return;

  const t = translations[lang];

  // Update text content
  $("#title").text(t.title);
  // $("#name-logo").text(t["name-logo"]);
  $("#nav-intro").text(t["nav-intro"]);
  $("#nav-edu").text(t["nav-edu"]);
  $("#nav-projects").text(t["nav-projects"]);
  $("#nav-skills").text(t["nav-skills"]);
  $("#nav-contact").text(t["nav-contact"]);
  // $("#name").text(t.name);
  // $("#occup").text(t.occup);
  // $("#summary-title").text(t["summary-title"]);
  $("#summary-content").html(t["summary-content"]);
  $("#edu-h2").text(t["edu-h2"]);
  $("#edu-p").text(t["edu-p"]);
  $("#edu-year").text(t["edu-year"]);
  $("#project-exp-h2").text(t["project-exp-h2"]);
  $("#project1-title").text(t["project1-title"]);
  $("#project1-date").text(t["project1-date"]);
  $("#project2-title").text(t["project2-title"]);
  $("#project2-date").text(t["project2-date"]);
  $("#skills-h2").text(t["skills-h2"]);
  $("#awards-h2").text(t["awards-h2"]);
  // $("#about-me-h2").text(t["about-me-h2"]);
  $("#hobbies-h2").text(t["hobbies-h2"]);
  // $("#hello").text(t.hello);
  // $("#contact").text(t.contact);
  // $("#footer-text").text(t["footer-text"]);

  // Update lists
  const lists = {
    "#project1-desc": t["project1-desc"],
    "#project2-desc": t["project2-desc"],
    "#skills-list": t["skills-list"],
    "#awards-list": t["awards-list"],
  };

  for (const [id, items] of Object.entries(lists)) {
    const $list = $(id);
    $list.empty();
    items.forEach((item) => {
      $list.append(`<li>${item}</li>`);
    });
  }

  // Update hobbies
  const $hobbies = $("#my-hobbies");
  $hobbies.empty();
  t.hobbies.forEach((hobby) => {
    $hobbies.append(
      `<div class="card col-12 col-sm-5 col-lg-2"><div class="card-body">${hobby}</div></div>`
    );
  });
}

// Initial load
$(document).ready(function () {
  fetchTranslations();
});
