const raccoon = document.getElementById("raccoon");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    jump();
  }
});

function jump() {
  if (!raccoon.classList.contains("jump")) {
    raccoon.classList.add("jump");

    setTimeout(() => {
      raccoon.classList.remove("jump");
    }, 500);
  }
}

// перевірка зіткнення
let isAlive = setInterval(function() {
  let raccoonBottom = parseInt(window.getComputedStyle(raccoon).getPropertyValue("bottom"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

  if (cactusLeft > 700 && cactusLeft < 750 && raccoonBottom < 50) {
    alert("Game Over 😢");
  }
}, 10);
