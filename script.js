const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];

function resize() {
  canvas.width = innerWidth * devicePixelRatio;
  canvas.height = innerHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

  stars = Array.from({ length: Math.floor((innerWidth * innerHeight) / 28000) }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() * 1.4 + 0.25,
    a: Math.random() * 0.9 + 0.1,
    speed: Math.random() * 0.015 + 0.004
  }));
}

function draw() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (const s of stars) {
    s.a += s.speed;
    const glow = 0.25 + Math.abs(Math.sin(s.a)) * 0.75;

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(139,124,255,${glow})`;
    ctx.shadowColor = "rgba(139,124,255,.9)";
    ctx.shadowBlur = 8;
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

addEventListener("resize", resize);
resize();
draw();
