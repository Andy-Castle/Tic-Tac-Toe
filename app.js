function Game() {
  const cells = document.querySelectorAll(".cell");
  const statusText = document.querySelector("#statusText");
  const restartBtn = document.querySelector("#restartBtn");
  const playerOneInput = document.querySelector("#player1");
  const playerTwoInput = document.querySelector("#player2");
  const btnStartGame = document.querySelector("#startGame");
  const cellContaier = document.querySelector("#cellContainer");
  const playersContainer = document.querySelector("#playersInput");

  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let options = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let namePlayer = "";
  let playerOne = "";
  let playerTwo = "";
  let running = false;

  btnStartGame.addEventListener("click", GetNamesPlayers);

  function GetNamesPlayers() {
    playerOne = playerOneInput.value;
    playerTwo = playerTwoInput.value;
    namePlayer = playerOne;

    if (!playerOneInput.value) {
      playerOne = "X";
    }
    if (!playerTwoInput.value) {
      playerTwo = "O";
    }

    cellContaier.style.display = "grid";
    statusText.style.display = "block";
    restartBtn.style.display = "inline";
    playersContainer.style.display = "none";
    initializeGame();
  }

  function initializeGame() {
    cells.forEach((cell) => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${namePlayer}'s turn`;
    running = true;
  }

  function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running) {
      return;
    }

    updateCell(this, cellIndex);
    checkWinner();
  }

  function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
  }

  function changePlayer() {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    namePlayer = namePlayer == playerOne ? playerTwo : playerOne;
    statusText.textContent = `${namePlayer}'s turn`;
  }

  function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winCondition.length; i++) {
      const condition = winCondition[i];
      const cellA = options[condition[0]];
      const cellB = options[condition[1]];
      const cellC = options[condition[2]];

      if (cellA == "" || cellB == "" || cellC == "") {
        continue;
      }
      if (cellA == cellB && cellB == cellC) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      statusText.textContent = `${namePlayer} wins!`;
      running = false;
    } else if (!options.includes("")) {
      statusText.textContent = `Draw!`;
      running = false;
    } else {
      changePlayer();
    }
  }

  function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${namePlayer}'s turn`;
    cells.forEach((cell) => (cell.textContent = ""));
    running = true;
    cellContaier.style.display = "none";
    statusText.style.display = "none";
    restartBtn.style.display = "none";
    playerOneInput.value = "";
    playerTwoInput.value = "";
    playersContainer.style.display = "grid";
  }
}

Game();
