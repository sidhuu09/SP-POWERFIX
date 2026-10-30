document.getElementById("year").textContent = new Date().getFullYear();

const languageButton = document.getElementById("languageBtn");
let currentLanguage = "en";
languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "or" : "en";
  document.documentElement.lang = currentLanguage === "or" ? "or" : "en";
  document.querySelectorAll("[data-en][data-or]").forEach((element) => {
    element.textContent = element.dataset[currentLanguage];
  });
  languageButton.textContent = currentLanguage === "en" ? "ଓଡ଼ିଆ" : "English";
});
