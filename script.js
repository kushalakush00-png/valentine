const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const card = document.getElementById("card");

const texts = [
  "Are you sure? 🤨",
  "Think again 😏",
  "Come on… 😌",
  "Don’t do this 💔",
  "Last chance 👀",
  "You know you want to ❤️"
];

let noCount = 0;
let yesScale = 1;

noBtn.addEventListener("click", () => {
  message.textContent = texts[noCount % texts.length];
  noCount++;

  // Move NO button within screen (mobile-safe)
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  // YES grows
  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1 class="title">She said YES!! 💖🥰</h1>
    <p class="subtitle">
      You just made my Valentine’s Day special ❤️<br><br>
      I’m really happy right now ✨
    </p>
  `;

  setInterval(createHeart, 250);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}
