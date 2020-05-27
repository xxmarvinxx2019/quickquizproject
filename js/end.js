const username = document.getElementById("username");
const saveScore = document.getElementById("saveScoreBtn");
const finalscore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highscore = JSON.parse(localStorage.getItem("highScore")) || [];

const MAX_HIGH_SCORE = 5;

finalscore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
  saveScore.disabled = !username.value;
});
saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value,
  };
  highscore.push(score);
  highscore.sort((a, b) => b.score - a.score);
  highscore.splice(5);

  localStorage.setItem("highscore", JSON.stringify(highscore));
  window.location.assign("/quiz/index.html");
};
