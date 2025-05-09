const images = [
  'assets/image/background/bakery-season1-shader.jpeg',
'assets/image/background/boat-water-moon-night-shader.jpeg'
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

// Function to change the background image
function changeBackground() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const backgroundDiv = document.querySelector('.background');
  if (backgroundDiv) {
    backgroundDiv.style.backgroundImage = `url(${randomImage})`;
  }
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Initial background change
changeBackground();