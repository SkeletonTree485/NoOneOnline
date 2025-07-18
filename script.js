const images = [
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
'/assets/image/background/lobby-sunset.jpeg'
  // too many images perhaps? add couple new, remove some old -- for future me
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

  // new image on hidden layer
  next.style.backgroundImage = `url(${randomImage})`;

  // crossfade
  next.style.opacity = 1;
  current.style.opacity = 0;

  // swapping layers
  [current, next] = [next, current];
}

// setup
changeBackground();
setInterval(changeBackground, 15000);