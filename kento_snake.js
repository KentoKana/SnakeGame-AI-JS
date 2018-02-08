//Snake Game AI 

//Grid dimension 
const height = 10;
const width = height;

//CellObject: [0] = cell, [1] = Snake, [2] = Apple
const cellObject = ['_','S','A'] 
let cell = [];

//y and x coordinates for the snake (y,x)
let snakeCoord = [randomCoord(), randomCoord()]
//y and x coordinates for the apple (y,x)
let appleCoord = [randomCoord(), randomCoord()]

//Prompt to initialize the game. 
let startPrompt = prompt('Type "go" to begin snake').toLowerCase();

//Generates random number for coordinates
function randomCoord() {
	return Math.floor(Math.random()*height);
}

//function for generating game grid .
//N.B. the first for-loop pushes an empty array into the existing "cell" array, and the cell object is then pushed into that array.
function printGrid() {
	for(let i=0;i<width;i++){
		cell[i]=[];
		for(j=0;j<width;j++){
			cell[i][j]=cellObject[0];
		}
	}
	return cell;
}

//Prints apple in random position
function printApple() { 
	cell[appleCoord[0]][appleCoord[1]] = cellObject[2];
	console.log("apple coord (y, x): " + appleCoord[0].toString() + ", " + appleCoord[1].toString());
	return cell;
}

//Prints snake in random position
function printSnake() {
	cell[snakeCoord[0]][snakeCoord[1]] = cellObject[1];
	console.log("snake coord (y, x): " + snakeCoord[0].toString() + ", " + snakeCoord[1].toString());
	document.write('<br>' + '<br>' + cell.join('<br>'))
	return cell;
}

//function to initialize the board state
function startGame() {
	if (startPrompt === 'go') {
		console.log(cell);
		printGrid();
		printApple();
		printSnake();
	} 
}

//Moves snake towards a goal (eg apple).
//'from' parameter is the original coordinate of the snake.
//'to' parameter is the goal object.
function moveSnake(from, to) {
	while(true){
		if(from[1]<to[1]){
			from[1] += 1;
			printSnake();
		} else if(from[1]>to[1]){
			from[1] -= 1;
			printSnake();
		} else if(from[0]<to[0]){
			from[0]+=1;
			printSnake();
		} else if (from[0]>to[0]){
			from[0] -= 1;
			printSnake();
		} else{
			break;
		}
	}
};

startGame();
moveSnake(snakeCoord, appleCoord);
