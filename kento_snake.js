//Grid dimension 
const height = 10;
const width = height;

//CellObjects
const cellObject = {snake:'S', apple:'A', cell:'_'};
let cell = [];

//y and x coordinates for the snake (y,x)
let snakeCoord = [randomCoord(), randomCoord()]
//y and x coordinates for the apple (y,x)
let appleCoord = [randomCoord(), randomCoord()]

//Prompt to initialize the game. 
const startPrompt = prompt('Type "go" to begin snake').toLowerCase();

let score = 0


//Generates random number for coordinates
function randomCoord() {
	return Math.floor(Math.random()*height);
}

//function for generating game grid .
//N.B. the first for-loop pushes an empty array into the existing "cell" array, and the cellSym is then pushed into that array.
function makeGrid() {
	for(let i=0;i<width;i++){
		cell[i]=[];
		for(j=0;j<width;j++){
			cell[i][j]=cellObject.cell;
		}
	}
	return cell;
}

//Places apple in random position
function placeApple() { 
	cell[appleCoord[0]][appleCoord[1]] = cellObject.apple;
	console.log("apple coord (y, x): " + appleCoord[0].toString() + ", " + appleCoord[1].toString());
	return cell;
}

//Places snake in random position
function placeSnake() {
	cell[snakeCoord[0]][snakeCoord[1]] = cellObject.snake;
	console.log("snake coord (y, x): " + snakeCoord[0].toString() + ", " + snakeCoord[1].toString());
	printGrid();
	return cell;
}

//Replaces cellObjects with cell.
function replaceWithCell(object) {
	cell[object[0]][object[1]] = cellObject.cell;
}

//prints Grid to the browser.
function printGrid() {
	document.write('<br>' + '<br>' + cell.join('<br>'));
}

//function to initialize the board state
function startGame() {
	if (startPrompt === 'go') {
		console.log(cell);
		makeGrid();
		placeApple();
		printGrid()
		moveSnake(snakeCoord, appleCoord);
	} 
}

//Moves snake towards a goal (eg apple).
//'from' parameter is the original coordinate of the snake.
//'to' parameter is the goal object.
function moveSnake(from, to) {
	while(true){
		if(from[1]<to[1]){
			replaceWithCell(snakeCoord);
			from[1] += 1;
			placeSnake();
		} else if(from[1]>to[1]){
			replaceWithCell(snakeCoord);
			from[1] -= 1;
			placeSnake();
		} else if(from[0]<to[0]){
			replaceWithCell(snakeCoord);
			from[0]+=1;
			placeSnake();
		} else if (from[0]>to[0]){
			replaceWithCell(snakeCoord);
			from[0] -= 1;
			placeSnake();
		} else{
			break;
		}
	}
};

console.log('Your Score is: ' + score);


startGame();