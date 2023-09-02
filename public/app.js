let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const resultContainer = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');

function checkWin() {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }

    if (gameBoard.includes('')) {
        return null;
    } else {
        return 'Draw';
    }
}

function updateResult() {
    const winner = checkWin();

    if (winner === 'X') {
        resultContainer.textContent = 'Player X wins!';
    } else if (winner === 'O') {
        resultContainer.textContent = 'Player O wins!';
    } else if (winner === 'Draw') {
        resultContainer.textContent = "It's a draw!";
    } else {
        resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

function makeMove(row, col) {
    if (gameBoard[row * 3 + col] === '' && !checkWin()) {
        gameBoard[row * 3 + col] = currentPlayer;
        buttons[row * 3 + col].textContent = currentPlayer;
        buttons[row * 3 + col].disabled = true;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateResult();
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    buttons.forEach((button) => {
        button.textContent = '';
        button.disabled = false;
    });
    resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
}

updateResult();