let board = ["", "", "", "", "", "", "", "", ""];
let winning_combinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];
let move = 0;
let space = document.querySelector(".container");
let popUp = document.querySelector(".winBox");
let winnerText = document.querySelector(".winnerText");
let p1Score = document.getElementById("p1score");
let p2Score = document.getElementById("p2score");
let player1Name = "Player 1";
let player2Name = "Player 2";

space.addEventListener("click", (e) => {
  let ch = e.target;
  let chal = ch.id;
  let box = document.getElementById(chal);

  if (box && box.innerHTML === "") {
    if (move === 0) {
      box.innerHTML = "X";
      box.style.color = "#ff6464";
      board[chal] = "X";
      move = 1;
    } else {
      box.innerHTML = "O";
      box.style.color = "#6495ff";
      board[chal] = "O";
      move = 0;
    }

    for (let combo of winning_combinations) {
      let [a, b, c] = combo;
      if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
        let winner = board[a] === "X" ? player1Name : player2Name;
        if (board[a] === "X") {
          p1Score.innerHTML = parseInt(p1Score.innerHTML) + 1;
        } else {
          p2Score.innerHTML = parseInt(p2Score.innerHTML) + 1;
        }
        winnerText.innerHTML = `${winner} won!`;
        popUp.style.display = "flex";
        return;
      }
    }
  }
});

document.querySelector(".btn").addEventListener("click", () => {
  resetBoard();
  popUp.style.display = "none";
});

document.querySelector(".rematch button").addEventListener("click", () => {
  resetBoard();
});

document.querySelector(".reset button").addEventListener("click", () => {
  p1Score.innerHTML = 0;
  p2Score.innerHTML = 0;
  resetBoard();
});

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
  move = 0;
}

document.getElementById("p1name").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    player1Name = e.target.value.trim() || "Player 1";
    e.target.blur();
  }
});

document.getElementById("p2name").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    player2Name = e.target.value.trim() || "Player 2";
    e.target.blur();
  }
});

document.addEventListener("touchstart", function (e) {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });
