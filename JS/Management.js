const dots = document.querySelectorAll(".dot");
const backgroundImages = [
  "url('background1.jpg')",
  "url('background2.jpg')",
  "url('background3.jpg')"
];

function changeBackground(index) {
  document.body.style.backgroundImage = backgroundImages[index];
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  dots.forEach(dot => dot.style.backgroundColor = 'var(--black-matte)');
  dots[index].style.backgroundColor = 'var(--gold-matte)';
}

function changeCircleColor() {
  const circles = document.querySelectorAll('.circle');
  circles.forEach(circle => {
    circle.style.backgroundColor = 'var(--gold-matte)';
  });

  const circleContainer = document.querySelector('.circle-container');
  setTimeout(() => {
    circles.forEach(circle =>{
      circle.style.backgroundColor = 'var(--black-matte)';
    })
    circleContainer.style.animationPlayState = 'running';
  }, 2000);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => changeBackground(index));
});

function goToPage2(url) {
  document.body.classList.add('transition-out');

  setTimeout(() => {
    window.location.href = url;
    
    document.body.classList.remove('transition-out');
    document.body.classList.add('transition-in');
  }, 1500);
}

const circleContainer = document.querySelector('.circle-container');
circleContainer.addEventListener('click', () => {
  changeCircleColor();
  goToPage2('page2.html');
});

function showSlideInBox(content) {
  const slideInBox = document.getElementById('slide-in-box');
  const slideInContent = document.getElementById('slide-in-content');

  const currentContent = languages[currentLanguage][content];

  if (currentContent) {
    slideInContent.innerHTML = `
      <h2>${currentContent.title}</h2>
      ${currentContent.body}
    `;
  }

  slideInBox.style.left = '0';
}

function hideSlideInBox() {
  const slideInBox = document.getElementById('slide-in-box');
  slideInBox.style.left = '-100%';
}