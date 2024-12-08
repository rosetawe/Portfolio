// Dropdown öffnen/schließen
document.getElementById('languageButton').addEventListener('click', () => {
  const dropdown = document.getElementById('languageDropdown');
  dropdown.classList.toggle('show');
});

// Übersetzungen für jede Sprache
const languages = {
  de: {
    Language: "Sprache",
    description: "Ich bin Game- und Multimedia-Entwickler mit Fokus auf interaktive Anwendungen und Spiele, die funktional und ästhetisch ansprechend sind.",
    buttons: {
      Resume: "LEBENSLAUF",
      Skills: "KOMPETENZEN",
      Contact: "KONTAKT"
    },
    Resume: {
      title: "LEBENSLAUF",
      body: `
        <p>Ich bin eine engagierte und vielseitige Person. Ich habe bereits Erfahrungen in verschiedenen Branchen und Kulturen gesammelt, sowohl in Deutschland als auch in Ecuador. Ich freue mich darauf, meine Fähigkeiten weiterzuentwickeln und spannende Projekte zu realisieren.</p>
        <h3>Ausbildung</h3>
        <ul>
          <li>Ausbildung in Game- und Multimedia-Entwicklung <br><strong>Stuttgart, seit Oktober 2023</strong></br></li>
          <li>Abitur, Edith-Stein-Schule <br><strong>Freiburg, September 2019 - Juli 2022</strong></br></li>
          <li>9./10. Klasse, St. Ursula Gymnasium <br><strong>Freiburg, September 2017 - Juni 2019</strong></br></li>
          <li>Vorbereitungsklasse für ausländische Kinder und Jugendliche, Karlschule <br><strong>Freiburg, September 2017 - Juni 2019</strong></br></li>
          <li>Private Primar- und Sekundarschule, La Asuncion <br><strong>Ecuador, April 2007 - Februar 2017</strong></br></li>
        </ul>
        <h3>Berufserfahrung</h3>
        <ul>
          <li>Lagerist (Minijob), Zara (Perform Services) <br><strong>Stuttgart, seit Oktober 2023</strong></br></li>
          <li>Verkäuferin (Teilzeit), Zalando Outlet <br><strong>Stuttgart, August - März 2023</strong></br></li>
          <li>Freiwilliges soziales Jahr, “Hogar de Cristo” <br><strong>Ecuador, April 2016 - Februar 2017</strong></br></li>
        </ul>
      `
    },
    Skills: {
      title: "KOMPETENZEN",
      body: `
        <h3>Sprachen</h3>
        <ul>
          <li>Englisch: <strong>gut</strong></li>
          <li>Deutsch: <strong>sehr gut</strong></li>
          <li>Spanisch: <strong>Muttersprache</strong></li>
        </ul>
        <h3>Programmiersprachen</h3>
        <ul>
          <li>C#</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>Unity</li>
        </ul>
        <h3>Andere Fähigkeiten</h3>
        <ul>
          <li>Blender <strong>(3D-Modellierung und Animation)</strong></li>
          <li>FontForge <strong>(Schrifterstellung)</strong></li>
        </ul>
      `
    },
    Contact: {
      title: "KONTAKT",
      body: `
        <p>Wenn du Fragen hast oder mehr über meine Projekte erfahren möchtest, kannst du mich gerne über die folgenden Kanäle erreichen:</p>
        <ul>
          <li><strong>Email:</strong> 2023gmetavros@gmail.com</li>
          <li><strong>Instagram:</strong> <a href="https://www.instagram.com/rose_paola_tavara_wenz/" target="_blank">instagram.com/rose_paola_tavara_wenz</a></li>
          <li><strong>Handynummer:</strong> +49 176 29400332</li>
        </ul>
      `
    }
  },
  es: {
    Language: "Idioma",
    description: "Soy desarrollador de juegos y multimedia, enfocado en aplicaciones interactivas y juegos que son funcionales y estéticamente atractivos.",
    buttons: {
      Resume: "CURRICULUM",
      Skills: "HABILIDADES",
      Contact: "CONTACTO"
    },
    Resume: { 
      title: "CURRICULUM",
      body: `
        <p>Soy una persona comprometida y versátil. He adquirido experiencia en diversas industrias y culturas, tanto en Alemania como en Ecuador. Espero seguir desarrollando mis habilidades y llevar a cabo proyectos emocionantes.</p>
        <h3>Educación</h3>
        <ul>
          <li>Formación en Desarrollo de Juegos y Multimedia <br><strong>Stuttgart, desde octubre de 2023</strong></li>
          <li>Bachillerato, Escuela Edith-Stein <br><strong>Friburgo, septiembre de 2019 - julio de 2022</strong></li>
          <li>Grados 9/10, Gymnasium St. Ursula <br><strong>Friburgo, septiembre de 2017 - junio de 2019</strong></li>
          <li>Clase preparatoria para niños y jóvenes extranjeros, Karlschule <br><strong>Friburgo, septiembre de 2017 - junio de 2019</strong></li>
          <li>Escuela Primaria y Secundaria Privada, La Asunción <br><strong>Ecuador, abril de 2007 - febrero de 2017</strong></li>
        </ul>
        <h3>Experiencia Laboral</h3>
        <ul>
          <li>Auxiliar de Almacén (Mini-job), Zara (Perform Services) <br><strong>Stuttgart, desde octubre de 2023</strong></li>
          <li>Asistente de Ventas (Medio tiempo), Zalando Outlet <br><strong>Stuttgart, agosto - marzo de 2023</strong></li>
        <li>Año Social Voluntario, “Hogar de Cristo” <br><strong>Ecuador, abril de 2016 - febrero de 2017</strong></li>
        </ul>
      `
    },
    Skills: {
      title: "HABILIDADES",
      body: `
        <h3>Idiomas</h3>
        <ul>
          <li>Inglés: <strong>Bueno</strong></li>
          <li>Alemán: <strong>Muy bueno</strong></li>
          <li>Español: <strong>Lengua materna</strong></li>
        </ul>
        <h3>Lenguajes de programación</h3>
        <ul>
          <li>C#</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>Unity</li>
        </ul>
        <h3>Otras habilidades</h3>
        <ul>
          <li>Blender <strong>(Modelado y animación 3D)</strong></li>
          <li>FontForge <strong>(Creación de fuentes)</strong></li>
        </ul>
      `
    },    
    Contact: {
      title: "CONTACTO",
      body: `
        <p>Si tienes alguna pregunta o deseas conocer más sobre mis proyectos, no dudes en ponerte en contacto conmigo a través de los siguientes canales:</p>
        <ul>
          <li><strong>Correo electrónico:</strong> 2023gmetavros@gmail.com</li>
          <li><strong>Instagram:</strong> <a href="https://www.instagram.com/rose_paola_tavara_wenz/" target="_blank">instagram.com/rose_paola_tavara_wenz</a></li>
          <li><strong>Número de teléfono:</strong> +49 176 29400332</li>
        </ul>
      `
    }    
  },
  en: {
    Language: "Language",
    description: "I am a game and multimedia developer focused on interactive applications and games that are both functional and aesthetically pleasing.",
    buttons: {
      Resume: "RESUME",
      Skills: "SKILLS",
      Contact: "CONTACT",
      schulprojekte: "Schoolprojects"
    },
    Resume: { 
      title: "RESUME",
      body: `
        <p>I am a committed and versatile individual. I have gained experience in various industries and cultures, both in Germany and Ecuador. I look forward to further developing my skills and taking on exciting projects.</p>
        <h3>Education</h3>
        <ul>
          <li>Training in Game and Multimedia Development <br><strong>Stuttgart, since October 2023</strong></li>
          <li>High School Diploma, Edith-Stein School <br><strong>Freiburg, September 2019 - July 2022</strong></li>
          <li>Grades 9/10, St. Ursula Gymnasium <br><strong>Freiburg, September 2017 - June 2019</strong></li>
          <li>Preparatory class for foreign children and youth, Karlschule <br><strong>Freiburg, September 2017 - June 2019</strong></li>
          <li>Private Primary and Secondary School, La Asuncion <br><strong>Ecuador, April 2007 - February 2017</strong></li>
        </ul>
        <h3>Work Experience</h3>
        <ul>
          <li>Warehouse Assistant (Mini-job), Zara (Perform Services) <br><strong>Stuttgart, since October 2023</strong></li>
          <li>Sales Assistant (Part-time), Zalando Outlet <br><strong>Stuttgart, August - March 2023</strong></li>
          <li>Voluntary Social Year, “Hogar de Cristo” <br><strong>Ecuador, April 2016 - February 2017</strong></li>
        </ul>
      `
    },
    Skills: {
      title: "SKILLS",
      body: `
        <h3>Languages</h3>
        <ul>
          <li>English: <strong>Good</strong></li>
          <li>German: <strong>Very good</strong></li>
          <li>Spanish: <strong>Native speaker</strong></li>
        </ul>
        <h3>Programming Languages</h3>
        <ul>
          <li>C#</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>Unity</li>
        </ul>
        <h3>Other Skills</h3>
        <ul>
          <li>Blender <strong>(3D modeling and animation)</strong></li>
          <li>FontForge <strong>(Font creation)</strong></li>
        </ul>
      `
    },    
    Contact: {
      title: "CONTACT",
      body: `
        <p>If you have any questions or would like to learn more about my projects, feel free to reach out to me via the following channels:</p>
        <ul>
          <li><strong>Email:</strong> 2023gmetavros@gmail.com</li>
          <li><strong>Instagram:</strong> <a href="https://www.instagram.com/rose_paola_tavara_wenz/" target="_blank">instagram.com/rose_paola_tavara_wenz</a></li>
          <li><strong>Phone number:</strong> +49 176 29400332</li>
        </ul>
      `
    }    
  }
};

// Standard-Sprache setzen
let currentLanguage = localStorage.getItem('language') || 'de';

function updateLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);

  // Aktualisierung des Sprachbuttons
  document.getElementById("languageButton").textContent = languages[lang].Language;

  // Aktualisierung der Hauptbeschreibung
  document.getElementById("description").textContent = languages[lang].description;

  // Aktualisierung der Abstract-Buttons
  document.querySelectorAll(".abstract-button").forEach(button => {
    const contentKey = button.getAttribute("data-content");
    if (contentKey && languages[lang].buttons[contentKey]) {
      button.textContent = languages[lang].buttons[contentKey];
    }
  });
}

// Sprachumschaltung
document.querySelectorAll(".language-option").forEach(button => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.getAttribute("data-language");
    updateLanguage(selectedLanguage);
  });
});

// Standard-Sprache laden
updateLanguage(currentLanguage);