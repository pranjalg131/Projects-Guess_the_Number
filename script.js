"use strict";

// Setting variables on page reload.
let randomNumber = Math.ceil(Math.random() * 20);
let highscore = Number(document.querySelector(".highscore").textContent);

// On Click Behaviour on the Check Button
document.querySelector(".check").addEventListener("click", function () {
  const input = Number(document.querySelector(".guess").value);
  let score = Number(document.querySelector(".score").textContent);

  // Empty Input
  if (!input) {
    document.querySelector(".message").textContent = "⛔ No Input!";
  } else {
    if (input > randomNumber) {
      score--;
      document.querySelector(".message").textContent = "📈 Too High!";
      document.querySelector(".score").textContent = score;
    } else if (input < randomNumber) {
      score--;
      document.querySelector(".message").textContent = "📉 Too Low!";
      document.querySelector(".score").textContent = score;
    } else {
      document.body.style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = randomNumber;
      document.querySelector(".message").textContent = "🎉 Correct Answer!";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector(".guess").value = "";
  randomNumber = Math.ceil(Math.random() * 20);
});
