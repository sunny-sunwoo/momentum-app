const body = document.querySelector("body");
const IMG_NUMBER = 3;

function getRandom() {
  let randomNumber = Math.floor(Math.random() * IMG_NUMBER);
  return randomNumber;
}

function displayImage(imgNumber) {
  const image = new Image();
  image.src = `src/img/${imgNumber}`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function init() {
  const randomNumber = getRandom();
  displayImage(randomNumber);
}

init();
