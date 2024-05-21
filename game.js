let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameEnded = false;
let movesMade = 0;

function handleClick(event) {
    if (gameEnded) return;

    const index = event.target.dataset.index;
    if (board[index] === "") {
        board[index] = currentPlayer;
        event.target.innerText = currentPlayer;
        movesMade++;
        document.getElementById("movesMade").innerText = movesMade;
        if (checkWinner()) {
            document.getElementById("status").innerText = "Player " + currentPlayer + " wins!";
            gameEnded = true;
        } else if (!board.includes("")) {
            document.getElementById("status").innerText = "It's a draw!";
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            document.getElementById("currentPlayer").innerText = currentPlayer;
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameEnded = false;
    movesMade = 0;
    Array.from(document.getElementsByClassName("cell")).forEach(cell => cell.innerText = "");
    document.getElementById("status").innerText = "";
    document.getElementById("currentPlayer").innerText = currentPlayer;
    document.getElementById("movesMade").innerText = movesMade;
}
