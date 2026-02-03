const yesBtn = document.getElementById("yesBtn");
const noText = document.getElementById("noText");
const card = document.getElementById("card");

const texts = [
  "Are you sure? 🤨",
  "Think again 😏",
  "Really?? 👀",
  "Don’t do this 💔",
  "Last chance 😌",
  "Okay okay… 😭"
];

let count = 0;
let yesScale = 1;

// Initial position
moveNoText();

noText.addEventListener("click", () => {
  count++;
  noText.textContent = texts[count % texts.length];

  // Move text safely on screen
  moveNoText();

  // YES button grows
  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1 class="title">She said YES!! 💖🥰</h1>
    <p class="subtitle">
      You just made my Valentine’s Day ❤️<br><br>
      I’m really really happy right now ✨
    </p>
  `;

  setInterval(createHeart, 250);
});

function moveNoText() {
  const padding = 20;
  const maxX = window.innerWidth - noText.offsetWidth - padding;
  const maxY = window.innerHeight - noText.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noText.style.left = x + "px";
  noText.style.top = y + "px";
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}

