const images = [
  'assets/image/background/bakery-season1-shader.jpeg',
'assets/image/background/boat-water-moon-night-shader.jpeg',
'assets/image/background/coral-reef-underwater-blue-reflections-shader.jpeg',
'assets/image/background/jungle-bamboo-landscape-shader.jpeg',
'assets/image/background/jungle-sky-shader.jpeg',
'assets/image/background/jungle-watermelon-shader.jpeg',
'assets/image/background/lake-jungle-bamboo-shader.jpeg',
'assets/image/background/lake-jungle-landscape-shader.jpeg',
'assets/image/background/lake-jungle-top-shader.jpeg',
'assets/image/background/landscape-foggy-shader.jpeg',
'assets/image/background/squid-underwater-blue-kelp-shader.jpeg',
'assets/image/background/squid-underwater-deepblue-kelp-shader.jpeg',
'assets/image/background/townhall-season4-shader.jpeg',
  // Add as many images as you want
];

const backgroundDiv = document.querySelector('.background');

function changeBackground() {
  if (!backgroundDiv) return;

  // Fade out
  backgroundDiv.style.opacity = 0;

  setTimeout(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    backgroundDiv.style.backgroundImage = `url(${randomImage})`;

    // Fade back in
    backgroundDiv.style.opacity = 1;
  }, 500); // Halfway through the transition
}

// Change background every 5 seconds
setInterval(changeBackground, 1000);

// Initial background change
changeBackground();