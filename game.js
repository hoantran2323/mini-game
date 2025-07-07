const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 20;

function draw() {
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#00f";
  ctx.fill();

  y += 1; // gravity
  if (y + radius > canvas.height) {
    y = canvas.height - radius;
  }

  requestAnimationFrame(draw);
}

draw();
