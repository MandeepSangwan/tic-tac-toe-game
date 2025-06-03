let board = ["", "", "", "", "", "", "", "", ""];
let winning_combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let move = 0;
let space = document.querySelector(".container");
space.addEventListener("click", (e) => {
  let ch = e.target;
  let chal = ch.id;
  let box = document.getElementById(chal);
  console.log(chal);
  if (move == 0 && box.innerHTML == "") {
    box.innerHTML = "X";
    board[chal] = "X";
    console.log(board);
    move = 1;
  } else if (move == 1 && box.innerHTML == "") {
    box.innerHTML = "O";
    board[chal] = "O";
    console.log(board);
    move = 0;
  } else {
    alert("glt chij dba di");
  }


for (let combo of winning_combinations) {
  let [a, b, c] = combo;
  if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
  alert("Congrats! You won");
}

  
   else {
    console.log("bera n k likhu");
  }
}
});