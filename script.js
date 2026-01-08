const images = [
  "Birthday1.jpg",
  "Birthday2.jpg",
  "Birthday3.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  index = (index + 1) % images.length;
  slide.src = images[index];
}, 2500);

function playMusic() {
  document.getElementById("music").play();
}
