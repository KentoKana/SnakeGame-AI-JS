//Grid dimention
const height = 10;
const width = height;

//All the states that a cell can hold.
const cellState = {snakeHead: 'S', snakeBody: '0', apple: 'A', cell: '_'  }

var gridObject;
var gameState;

var findSnake;
var findApple;




//Creates an array of objects for the grid. Object will hold the x and y value, as well as Boolean values for snake and apple.
function makeGridObject() {
	let grid = [];
	for(i=0;i<width;i++){
		grid[i] = []
		for(j=0;j<width;j++){
			grid[i][j] = {x: j, y: i, snake: false, apple: false}
		}	
	}
	return grid;
}

gridObject = makeGridObject()

//Creates game grid. 
function makeGrid(someGrid){
	let array = []
	for(i=0;i<width;i++){
		array[i] = [];
		for(j=0;j<width;j++){
			if(someGrid[i][j].snake === true){
				array[i][j] = cellState.snakeHead;
			} else if(someGrid[i][j].apple === true){
				array[i][j] = cellState.apple;
			}else{
				array[i][j] = cellState.cell;
			}
		}
	}
	return array;
}

gridObject[3][5].apple = true;
gridObject[3][4].snake = true;

gameState = makeGrid(gridObject);

document.write('<br>' + '<br>' + gameState.join('<br>'))

//Returns snake coordinate in the form [x, y]
function lookForSnake(grid){
	for(i=0;i<width;i++){
		for(j=0;j<width;j++){
			if(grid[i][j].snake === true){
				var snekHeadCoordX = (grid[i][j].x);
				var snekHeadCoordY= (grid[i][j].y);
			}
		}
	}
	var snakeCoord = [snekHeadCoordX, snekHeadCoordY];
	return snakeCoord;
}

findSnake = lookForSnake(gridObject);

function lookForApple(grid){
	for(i=0;i<width;i++){
		for(j=0;j<width;j++){
			if(grid[i][j].apple === true){
				var appleCoordX = (grid[i][j].x);
				var appleCoordY = (grid[i][j].y);
			}
		}
	}
	var appleCoord = [appleCoordX, appleCoordY];
	return appleCoord;
}

findApple = lookForApple(gridObject);

