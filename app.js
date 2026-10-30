
const languageBtn = document.getElementById("languageBtn");
let currentLanguage = "en";

languageBtn.addEventListener("click", function () {
  currentLanguage = currentLanguage === "en" ? "or" : "en";

  document.querySelectorAll("[data-en][data-or]").forEach(function (element) {
    element.textContent = element.getAttribute(
      currentLanguage === "en" ? "data-en" : "data-or"
    );
  });

  languageBtn.textContent = currentLanguage === "en" ? "ଓଡ଼ିଆ" : "English";
  document.documentElement.lang = currentLanguage === "en" ? "en" : "or";
});

document.getElementById("year").textContent = new Date().getFullYear();
