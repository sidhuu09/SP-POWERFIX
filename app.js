const languageBtn = document.getElementById('languageBtn');
let currentLanguage = 'en';
if (languageBtn) {
  languageBtn.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'or' : 'en';
    document.querySelectorAll('[data-en][data-or]').forEach((element) => {
      element.textContent = element.getAttribute(currentLanguage === 'en' ? 'data-en' : 'data-or');
    });
    languageBtn.textContent = currentLanguage === 'en' ? 'ଓଡ଼ିଆ' : 'English';
    document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'or';
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
