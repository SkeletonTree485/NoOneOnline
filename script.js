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

const preloadImages = images.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

const bgA = document.querySelector('.background-a');
const bgB = document.querySelector('.background-b');

let current = bgA;
let next = bgB;

function changeBackground() {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Set new image on the hidden layer
  next.style.backgroundImage = `url(${randomImage})`;

  // Start crossfade
  next.style.opacity = 1;
  current.style.opacity = 0;

  // Swap the layers
  [current, next] = [next, current];
}

// Initial setup
changeBackground();
setInterval(changeBackground, 15000);