const Game = (function () {
  let table = ["", "", "", "", "", "", "", "", ""];
  const makeTable = () => table;
  const restartTable = () => table;
  return { makeTable, restartTable };
})();

document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");
});
