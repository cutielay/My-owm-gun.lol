document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".glow");
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

document.querySelector(".discord-card button").addEventListener("click", () => {
  alert("Put your Discord invite link inside script.js");
});
