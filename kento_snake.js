//Grid dimention
const height = 10;
const width = height;

//All the states that a cell can hold.
const cellState = {snakeHead: 'S', snakeBody: '0', apple: 'A', cell: '_'  }


//Creates an array of objects for the grid. Object will hold the x and y value, as well as Boolean values for snake and apple.
function makeBackendGrid() {
	let grid = [];
	for(i=0;i<width;i++){
		grid[i] = []
		for(j=0;j<width;j++){
			grid[i][j] = {x: j, y: i, snake: false, apple: false}
		}	
	}
	return grid;
}

var backendGrid = makeBackendGrid()

//Creates game grid. 
function makeFrontendGrid(someGrid){
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


frontendGrid = makeFrontendGrid(backendGrid);

document.write('<br>' + '<br>' + frontendGrid.join('<br>'))

//Returns snake coordinate in the form [x, y]
function lookForSnake(grid){
	for(i=0;i<width;i++){
		for(j=0;j<width;j++){
			if(grid[i][j].snake === true){
				var snakeCoord = [grid[i][j].x, grid[i][j].y];
			}
		}
	}
	return snakeCoord;
}

backendGrid[9][9].snake = true;
var findSnake = lookForSnake(backendGrid)

//Returns apple coordinate in the form [x, y]
function lookForApple(grid){
	for(i=0;i<width;i++){
		for(j=0;j<width;j++){
			if(grid[i][j].apple === true){
				var appleCoord = [grid[i][j].x, grid[i][j].y];
			}
		}
	}
	return appleCoord;
}

backendGrid[0][0].apple = true;
var findApple = lookForApple(backendGrid);

function printNewGameState(){
	return document.write('<br>' + '<br>' + frontendGrid.join('<br>'))
}

function addToGrid(grid, xcoord, ycoord, obj, status){
	return grid[xcoord][ycoord][obj] = status
}

//moves snake towards goal. from arg is the snake head position, and to arg is the goal (e.g. apple)
function move(from, to){

	var dy = from[1] - to[1];
	var dx = from[0] - to[0];

	if(dy > 0){
		from[1] -= 1;
	} else if(dy < 0){
		from[1] += 1;
	} else if(dx > 0){
		from[0] -= 1;
	} else if(dx < 0){
		from[0] += 1;
	}
	return [from[0], from[1]]

}


//check to see if snake has the same coordinate as goal (e.g. apple)
function arraysEqual(arr1, arr2) {
	for(var i = arr1.length; i--;) {
		if(arr1[i] !== arr2[i]) {
			return false;
		} 
	}
	return true;
}


function runGame(){
	do {
		console.log(makeFrontendGrid(backendGrid))
		addToGrid(backendGrid, findSnake[0], findSnake[1], 'snake', false);
		findSnake = move(findSnake, findApple);
		addToGrid(backendGrid, findSnake[0], findSnake[1], 'snake', true);
		console.log(makeFrontendGrid(backendGrid));
	} while(arraysEqual(findSnake, findApple) === false);
}

runGame();
