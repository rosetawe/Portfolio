document.getElementById('languageButton').addEventListener('click', () => {
  const dropdown = document.getElementById('languageDropdown');
  dropdown.classList.toggle('show');
});

const languages = {
  de: {
    Language: "Sprache",
    pageTitle: "PROJEKTE",
    buttons: {
      schulprojekte: "Schulprojekte",
      selbstgemachte: "Selbstgemachte",
      kunst: "Kunst",
      fotografie: "Fotografie"
    },
    popup: {
      title: "Projektbeschreibung",
      madeWith: "Gemacht mit"
    }
  },
  es: {
    Language: "Idioma",
    pageTitle:"PROJECTOS",
    buttons: {
      schulprojekte: "Proyectos Escolares",
      selbstgemachte: "Hechos por Mí",
      kunst: "Arte",
      fotografie: "Fotografía"
    },
    popup: {
      title: "Descripción del Proyecto",
      madeWith: "Hecho con"
    }
  },
  en: {
    Language: "Language",
    pageTitle: "PROJECTS",
    buttons: {
      schulprojekte: "School Projects",
      selbstgemachte: "Self-Made",
      kunst: "Art",
      fotografie: "Photography"
    },
    popup: {
      title: "Project Description",
      madeWith: "Made with"
    }
  }
};

let currentLanguage = localStorage.getItem('language') || 'de';

function updateLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  document.getElementById("languageButton").textContent = languages[lang].Language;
  document.querySelector(".page-title h1").textContent = languages[lang].pageTitle;

  document.querySelectorAll(".category").forEach(button => {
    const contentKey = button.getAttribute("data-categorie");
    if (contentKey && languages[lang].buttons[contentKey]) {
      button.textContent = languages[lang].buttons[contentKey];
    }
  });

  document.getElementById("popup-title").textContent = languages[lang].popup.title;
}

document.querySelectorAll(".language-option").forEach(button => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.getAttribute("data-language");
    updateLanguage(selectedLanguage);
  });
});

updateLanguage(currentLanguage);