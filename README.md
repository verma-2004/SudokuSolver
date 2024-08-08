# SudokuSolver
Table of Contents
1.	Introduction
2.	Project Objective
3.	System Requirements
4.	Design and Implementation
o	4.1 HTML Structure
o	4.2 CSS Styling
o	4.3 JavaScript Logic
5.	Functionality
o	5.1 Fetching a Sudoku Puzzle
o	5.2 Solving the Sudoku Puzzle
6.	Key Challenges
7.	Results
8.	Future Enhancements
9.	References
________________________________________
1. Introduction
Sudoku is a popular logic-based number puzzle. The objective is to fill a 9x9 grid so that each column, each row, and each of the nine 3x3 subgrids contain all the digits from 1 to 9. This project aims to create a web-based Sudoku solver that can fetch a puzzle from an API and solve it using JavaScript.
2. Project Objective
The objective of this project is to develop a web application that:
•	Fetches a Sudoku puzzle from a remote server.
•	Displays the puzzle in a 9x9 grid.
•	Solves the puzzle using a backtracking algorithm.
•	Updates the grid with the solution.
3. System Requirements
Software Requirements
•	A web browser (e.g., Chrome, Edge)
•	A text editor (e.g., VS Code, Notepad++)
Hardware Requirements
•	A computer with an internet connection
4. Design and Implementation
The project is divided into three main components:
•	HTML for structure
•	CSS for styling
•	JavaScript for logic and interactivity
5.  Proposed Design and Methodology
Pictorial representation of Backtracking Algorithm 
 

6. Functionality
6.1 Fetching a Sudoku Puzzle
When the "Get Puzzle" button is clicked, an API request is sent to https://sugoku.onrender.com/board?difficulty=easy. The response is a JSON object containing a Sudoku puzzle. This puzzle is parsed and displayed in the 9x9 grid.
6.2 Solving the Sudoku Puzzle
When the "Solve Puzzle" button is clicked, the sudokuSolver function is called. This function uses a backtracking algorithm to fill the grid with the correct values. The algorithm checks each cell, trying numbers 1 through 9, and backtracks if it encounters a conflict.
7. Key Challenges
7.1  Validation
Ensuring the initial configuration of the puzzle is valid according to Sudoku rules before attempting to solve it:
•	Each row, column, and 3x3 subgrid must contain unique numbers from 1 to 9.
•	Detect and handle invalid puzzles to avoid unnecessary computation.
7.2. Backtracking Algorithm
Implementing an efficient backtracking algorithm to explore possible solutions recursively. The algorithm must:
•	Place a number in an empty cell: Attempt to fill each empty cell with numbers 1 through 9.
•	Recursively attempt to fill the remaining cells: Move to the next cell and repeat the process.
•	Backtrack if placing a number leads to an invalid configuration: Remove the number and try the next possible number.
8. User Interaction
Providing a user-friendly interface where users can:
•	Input their own Sudoku puzzles: Allow users to manually enter a Sudoku puzzle.
•	Automatically solve the puzzles: Enable a feature to solve the entered puzzle with a single click.
•	See the solving process in action through visual feedback: Implement visual cues to show the step-by-step solving process, enhancing user engagement and understanding.
9. Results
This project successfully creates a web-based Sudoku solver. The application fetches puzzles from an API and solves them using a backtracking algorithm implemented in JavaScript. The user interface is simple and easy to use, displaying the Sudoku grid and buttons for fetching and solving puzzles.
 

 
10. Future Enhancements
Future enhancements could include:
•	Adding user input functionality to allow users to enter their own Sudoku puzzles.
•	Providing visual feedback during the solving process to show the steps taken by the algorithm.
•	Improving the user interface with better styling and responsiveness.
•	Allowing the user to select the difficulty level of the puzzle.
10. References
•	Sudoku API: Sugoku API
•	Backtracking Algorithm: Wikipedia - Backtracking
