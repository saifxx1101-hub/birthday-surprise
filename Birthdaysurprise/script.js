/* 🎂 Typing Effect */
const text = "🎉 Happy Birthday My Love 🎂";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

/* 🎈 Balloons */
const balloonBox = document.querySelector(".balloons");
for (let i = 0; i < 20; i++) {
  let b = document.createElement("span");
  b.style.left = Math.random() * 100 + "vw";
  b.style.background = `hsl(${Math.random() * 360}, 100%, 75%)`;
  b.style.animationDuration = 5 + Math.random() * 5 + "s";
  balloonBox.appendChild(b);
}

/* 🎆 Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function fireworks() {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height/2, 3, 0, Math.PI*2);
  ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
  ctx.fill();
}
setInterval(fireworks, 100);

/* ⏳ Countdown */
const target = new Date("2026-12-31").getTime(); // CHANGE DATE
setInterval(() => {
  let now = new Date().getTime();
  let diff = target - now;
  if (diff > 0) {
    let d = Math.floor(diff / (1000*60*60*24));
    document.getElementById("countdown").innerText =
      `🎉 ${d} days to your special day`;
  }
}, 1000);

/* 🎵 Mobile Music Fix */
function playMusic() {
  const music = document.getElementById("music");
  music.play();
}
