'use strict';

const images = [
    "0.jpg",
    "1.jpg"
]

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

console.log(bgImage);

bgImage.src = `img/${randomImage}`;

console.log(bgImage.src);

document.body.appendChild(bgImage);