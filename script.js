// base url, because why not
const BASE_URL = 'https://www.no1online.cz';

// image list
const imagePaths = [
  '/assets/image/background/bakery-season1-shader.jpeg',
  '/assets/image/background/boat-water-moon-night-shader.jpeg',
  '/assets/image/background/coral-reef-underwater-blue-reflections-shader.jpeg',
  '/assets/image/background/jungle-bamboo-landscape-shader.jpeg',
  '/assets/image/background/jungle-sky-shader.jpeg',
  '/assets/image/background/lake-jungle-bamboo-shader.jpeg',
  '/assets/image/background/lake-jungle-top-shader.jpeg',
  '/assets/image/background/landscape-foggy-shader.jpeg',
  '/assets/image/background/squid-underwater-deepblue-kelp-shader.jpeg',
  '/assets/image/background/townhall-season4-shader.jpeg',
  '/assets/image/background/lobby-day.jpeg',
  '/assets/image/background/lobby-galaxy.jpeg',
  '/assets/image/background/lobby-sunset.jpeg',
];

// adding domain to images
const images = imagePaths.map(path => `${BASE_URL}${path}`);

// image preloads?
const preloadImages = [];

// ????
function preloadSequentially(index = 0) {
  if (index >= images.length) return;
  const img = new Image();
  img.src = images[index];
  preloadImages.push(img);
  img.onload = () => preloadSequentially(index + 1);
}
preloadSequentially();

// backgrounds
const bgA = document.querySelector('.background-a');
const bgB = document.querySelector('.background-b');

let current = bgA;
let next = bgB;
let lastIndex = -1;

// background changing
function changeBackground() {
  if (preloadImages.length === 0) return;

  let index;
  do {
    index = Math.floor(Math.random() * preloadImages.length);
  } while (index === lastIndex && preloadImages.length > 1);
  lastIndex = index;

  const image = preloadImages[index];
  next.style.backgroundImage = `url(${image.src})`;

  next.style.opacity = '1';
  current.style.opacity = '0';

  [current, next] = [next, current];
}

// looop?????
let lastTime = 0;
const interval = 15000;

function animationLoop(timestamp) {
  if (timestamp - lastTime >= interval) {
    changeBackground();
    lastTime = timestamp;
  }
  requestAnimationFrame(animationLoop);
}

// initial
changeBackground();
requestAnimationFrame(animationLoop);





// okay, i must admit, this was vibecoded. Luckily i know what it does, but i was just too lazy to do it myself. I promise, i'll try to do better in the future. 
