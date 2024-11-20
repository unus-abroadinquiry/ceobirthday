const c = document.getElementById('c');
const ctx = c.getContext('2d');

c.width = window.innerWidth;
c.height = window.innerHeight;

const opts = {
  strings: ["HAPPY", "BIRTHDAY!"],
  charSize: 30,
  charSpacing: 35,
  lineHeight: 40,
  cx: c.width / 2,
  cy: c.height / 2,
  fireworkPrevPoints: 10,
  fireworkBaseLineWidth: 5,
  fireworkAddedLineWidth: 8,
  fireworkSpawnTime: 200,
  fireworkBaseReachTime: 30,
  fireworkAddedReachTime: 30,
  gravity: 0.1,
};

ctx.font = `${opts.charSize}px Verdana`;

function drawFireworks() {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * c.width;
    const y = Math.random() * c.height;
    const radius = Math.random() * 5 + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

function loop() {
  ctx.clearRect(0, 0, c.width, c.height);
  drawFireworks();
  requestAnimationFrame(loop);
}

loop();
