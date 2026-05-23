document.querySelectorAll(".socials a").forEach((icon, index) => {
  icon.style.animationDelay = `${index * 0.08}s`;
});

document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".space-glow");
  if (!glow) return;

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
