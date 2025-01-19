var arr = [[], [], [], [], [], [], [], [], []];

// Initialize Sudoku grid with input fields
for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
        arr[i][j] = document.getElementById(i * 9 + j);
        // Create an input element for each box
        let input = document.createElement("input");
        input.type = "text";  
        input.inputMode = "numeric"; // Allow only numeric input
        input.pattern = "[1-9]*"; // Allow only digits 1-9
        input.classList.add("sudoku-input");
        input.id = `input-${i}-${j}`;
        arr[i][j].appendChild(input);
    }
}

var board = [[], [], [], [], [], [], [], [], []];

// Function to fill the board after solving
function FillBoard(board) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] != 0) {
                arr[i][j].firstChild.value = board[i][j];
            } else {
                arr[i][j].firstChild.value = '';
            }
        }
    }
}

// Validate if the input Sudoku is valid
function isValidSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] !== 0) {
                let temp = board[row][col];
                board[row][col] = 0; // Temporarily set the current cell to 0
                if (!isSafe(board, row, col, temp, 9)) {
                    return false; // If it's not safe, return false
                }
                board[row][col] = temp; // Revert the value
            }
        }
    }
    return true;
}

let SolvePuzzle = document.getElementById('SolvePuzzle');

SolvePuzzle.onclick = () => {
    // Read the values from the input fields into the board array
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            let inputVal = arr[i][j].firstChild.value;
            board[i][j] = inputVal ? parseInt(inputVal) : 0; // Convert to number or set to 0
        }
    }

    // Check if the input Sudoku is valid
    if (!isValidSudoku(board)) {
        alert("Invalid Sudoku! Please check your input.");
        return;
    }

    // Call the solver if the input is valid
    if (!sudokuSolver(board, 0, 0, 9)) {
        alert("No solution exists for the given Sudoku!");
    }
};

// Function to check if placing a value is safe
function isSafe(board, row, col, val, n) {
    for (let i = 0; i < n; i++) {
        if (board[row][i] == val || board[i][col] == val) return false;
    }
    // Submatrix check
    let rn = Math.sqrt(n);
    let si = row - (row % rn);
    let sj = col - (col % rn);
    for (let x = si; x < si + rn; x++) {
        for (let y = sj; y < sj + rn; y++) {
            if (board[x][y] == val) {
                return false;
            }
        }
    }
    return true;
}

// Backtracking function to solve Sudoku
function sudokuSolver(board, row, col, n) {
    // Base case
    if (row == n) {
        FillBoard(board);
        return true;
    }

    if (col == n) {
        return sudokuSolver(board, row + 1, 0, n);
    }

    if (board[row][col] != 0) {
        return sudokuSolver(board, row, col + 1, n);
    }

    for (let val = 1; val <= 9; val++) {
        if (isSafe(board, row, col, val, n)) {
            board[row][col] = val;
            let possible = sudokuSolver(board, row, col + 1, n);
            if (possible) {
                return true;
            }
            // Backtracking
            board[row][col] = 0;
        }
    }
    return false;
}
