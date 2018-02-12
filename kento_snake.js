//Grid dimension 
const height = 10;
const width = height;

//CellObjects
const cellObject = {snake:'S', snakeBody: '0', apple:'A', cell:'_'};

//y and x coordinates for the snake (y,x)
let snakeCoord = [randomCoord(), randomCoord()]
//y and x coordinates for the apple (y,x)
let appleCoord = [randomCoord(), randomCoord()]

var gameState = {
	"snakes": [[randomCoord(), randomCoord()]],
	"apples": [[randomCoord(), randomCoord()]],
	"grid": [["_", "_"],
	         ["_", "_"]]
}

// var cell = {apple: false, snake: snake, x: 0, y: 0}

//Prompt to initialize the game. 
const startPrompt = prompt('Type "go" to begin snake').toLowerCase();

let score = 0

//Checks to see if arrays are equivelent by checking every index
function arraysEqual(arr1, arr2) {
	if(arr1.length !== arr2.length)
		return false;
	for(var i = arr1.length; i--;) {
		if(arr1[i] !== arr2[i])
			return false;
	}
	return true;
}

//Generates random number for coordinates
function randomCoord() {
	return Math.floor(Math.random()*height);
}

//function for generating game grid .
//N.B. the first for-loop pushes an empty array into the existing "cell" array, and the cellSym is then pushed into that array.
function makeGrid() {
	let grid = [];
	for(let i=0;i<width;i++)  {
		grid[i]=[];
		for(let j=0;j<width;j++){
			grid[i][j] = {x: i, y: j, snake: false, apple: false};
		}
	}
	return grid;
}

function gridPrinter(some_grid){
	let grid = [];
	for(let i=0;i<width;i++){
		grid[i] = [];
		for(let j=0;j<width;j++){
			if (some_grid[i][j].snake === true) {
				grid[i][j] = cellObject.snake;
			} else if (some_grid[i][j].apple === true) {
				grid[i][j] = cellObject.apple;
			} else {
				grid[i][j] = cellObject.cell
			}
		}
	}
	return grid
}


var grid = makeGrid();
grid[0][3].snake = true // Just a test to see if it actually updates the grid that is to be printed.
console.log(grid)
console.log(gridPrinter(grid))




// //Places apple in random position
// function placeApple() { 
// 	cell[appleCoord[0]][appleCoord[1]] = cellObject.apple;
// 	console.log("apple coord (y, x): " + appleCoord[0].toString() + ", " + appleCoord[1].toString());
// 	return cell;
// }

// //Places snake in random position
// function placeSnake() {
// 	cell[snakeCoord[0]][snakeCoord[1]] = cellObject.snake;
// 	console.log("snake coord (y, x): " + snakeCoord[0].toString() + ", " + snakeCoord[1].toString());
// 	printGrid();
// 	return cell;
// }

// //Replaces cellObjects with cell.
// function replaceWithCell(object) {
// 	cell[object[0]][object[1]] = cellObject.cell;
// }

// //prints Grid to the browser.
// function printGrid() {
// 	document.write('<br>' + '<br>' + cell.join('<br>'));
// }

// //function to initialize the board state
// function startGame() {
// 	if(startPrompt === 'go') {
// 		console.log(cell);
// 		makeGrid();
// 		placeApple();
// 		moveSnake(snakeCoord, appleCoord);
// 		checkScore();
// 	} 
// }

// //Moves snake towards a goal (eg apple).
// //'from' parameter is the original coordinate of the snake.
// //'to' parameter is the goal object.
// function moveSnake(from, to) {
// 	while(true) {
// 		if(from[1]<to[1]) {
// 			replaceWithCell(snakeCoord);
// 			from[1] += 1;
// 			placeSnake();
// 		} else if(from[1]>to[1]) {
// 			replaceWithCell(snakeCoord);
// 			from[1] -= 1;
// 			placeSnake();
// 		} else if(from[0]<to[0]){
// 			replaceWithCell(snakeCoord);
// 			from[0]+=1;
// 			placeSnake();
// 		} else if(from[0]>to[0]) {
// 			replaceWithCell(snakeCoord);
// 			from[0] -= 1;
// 			placeSnake();
// 		} else{
// 			break;
// 		}
// 	}
// };

// function checkScore() {
// 	if(arraysEqual(snakeCoord, appleCoord)){
// 		alert('fuck yeah!');
// 	}
// }

// startGame();
// console.log(grid)
