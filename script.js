// NAME FROM URL
const params = new URLSearchParams(window.location.search);
const userName = params.get("name");
if (userName) {
  document.getElementById("name").innerText =
    "🎂 Happy Birthday " + userName + " 🎂";
}

// IMAGE SLIDER
let index = 0;
const slide = document.getElementById("slide");


// MUSIC
function playMusic() {
  document.getElementById("music").play();
}

// SHARE
function share() {
  const url = window.location.href;
  window.open(
    `https://wa.me/?text=🎉%20I%20have%20a%20birthday%20surprise%20for%20you!%20👉%20${url}`,
    "_blank"
  );
}

// CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
for (let i = 0; i < 150; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 10,
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.beginPath();
  for (let i = 0; i < pieces.length; i++) {
    const p = pieces[i];
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  update();
}

function update() {
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].y += Math.cos(pieces[i].d) + 1;
    if (pieces[i].y > canvas.height) {
      pieces[i].y = 0;
    }
  }
}

setInterval(draw, 30);
