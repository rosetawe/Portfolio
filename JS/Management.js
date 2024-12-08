// Elemente auswählen
const dots = document.querySelectorAll(".dot");
const backgroundImages = [
  "url('background1.jpg')",
  "url('background2.jpg')",
  "url('background3.jpg')"
];

// Funktion zur Änderung des Hintergrundbilds und zur Hervorhebung des Dots
function changeBackground(index) {
  document.body.style.backgroundImage = backgroundImages[index];
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  // Zurücksetzen der Farben aller Dots und dann Hervorhebung des angeklickten Dots
  dots.forEach(dot => dot.style.backgroundColor = 'var(--black-matte)');
  dots[index].style.backgroundColor = 'var(--gold-matte)';
}

// Funktion zur Änderung der Kreisfarbe und zur Steuerung der Animation
function changeCircleColor() {
  const circles = document.querySelectorAll('.circle');
  circles.forEach(circle => {
    circle.style.backgroundColor = 'var(--gold-matte)'; // Grüne matte Farbe für die Kreise
  });

  // Stoppt kurz die Animation und startet sie erneut für einen sanften Übergang
  const circleContainer = document.querySelector('.circle-container');
  setTimeout(() => {
    circles.forEach(circle =>{
      circle.style.backgroundColor = 'var(--black-matte)';
    })
    circleContainer.style.animationPlayState = 'running';
  }, 2000); // kurze Pause von 200ms
}

// Event Listener hinzufügen
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => changeBackground(index));
});

// Funktion zur Navigation mit Transition
function goToPage2(url) {
  // Start der Übergangsanimation (transition-out)
  document.body.classList.add('transition-out');

  // Timer für die Übergangsanimation
  setTimeout(() => {
    // Sobald die transition-out abgeschlossen ist, navigiere zur neuen Seite
    window.location.href = url;
    
    // Entferne transition-out und füge transition-in hinzu
    // Wir setzen die transition-in erst nach der Verzögerung
    document.body.classList.remove('transition-out');
    document.body.classList.add('transition-in');
  }, 1500); // Verzögerung passend zur Dauer der "transition-out" Animation
}

// Event Listener für den Kreis
const circleContainer = document.querySelector('.circle-container');
circleContainer.addEventListener('click', () => {
  changeCircleColor(); // Farbe ändern
  goToPage2('page2.html'); // Zur Seite navigieren
});



// Funktion, um die Slide-In-Box zu öffnen und den Inhalt anzuzeigen
function showSlideInBox(content) {
  const slideInBox = document.getElementById('slide-in-box');
  const slideInContent = document.getElementById('slide-in-content');

  // Inhalte basierend auf Sprache und Inhalt laden
  const currentContent = languages[currentLanguage][content];

  if (currentContent) {
    slideInContent.innerHTML = `
      <h2>${currentContent.title}</h2>
      ${currentContent.body}
    `;
  }

  // Box einblenden
  slideInBox.style.left = '0';
}

// Funktion, um die Slide-In-Box auszublenden
function hideSlideInBox() {
  const slideInBox = document.getElementById('slide-in-box');
  slideInBox.style.left = '-100%';
}