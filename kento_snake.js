//Grid dimention
const height = 10;
const width = height;

//All the states that a cell can hold.
const cellState = {snakeHead: 'S', snakeBody: '0', apple: 'A', cell: '_'  }


//Creates an array of objects for the grid. Object will hold the x and y value, as well as Boolean values for snake and apple.
function makeGridObject() {
	let grid = [];
	for(i=0;i<width;i++){
		grid[i] = []
		for(j=0;j<width;j++){
			grid[i][j] = {x: i, y: j, snake: false, apple: false}
		}	
	}
	return grid;
}

var createGridObject = makeGridObject()

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

var gameState = makeGrid(createGridObject);

console.log(gameState);


