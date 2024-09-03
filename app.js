const winningArrays = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];


const Game = (function () {
  let table = ["", "", "", "", "", "", "", "", ""];
  const makeTable = () => table;
  const restartTable = () => table;
  return { makeTable, restartTable };
})();

// document.addEventListener("DOMContentLoaded", function () {
//   const board = document.getElementById("board");
//   board.textContent = Game.makeTable();
// });
