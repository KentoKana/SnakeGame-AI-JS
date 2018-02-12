//Grid dimension 
const height = 10;
const width = height;

//CellObjects
const cellObject = {snake:'S', snakeBody: '0', apple:'A', cell:'_'};
let cell = [];

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
	for(let i=0;i<width;i++)  {
		cell[i]=[];
		for(j=0;j<width;j++){
			cell[i][j] = {x: i, y: j, snake: false, apple: false};
		} if(cell[i][j].snake === false && cell[i][j].apple === false){
			cell[i][j] = cellObject.cell;
		}

	}
	return cell;
}

makeGrid();

// var grid = makeGrid();
// grid[0][0]
// // {x: 0, y: 0, snake: false, apple: false}

// grid[0][0] = {x: 0, y: 0, snake: true, apple: false}

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