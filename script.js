let container = document.querySelector('#container');

//define container size
let containerWidth = 960;
container.style.maxWidth = `${containerWidth}px`;
container.style.maxHeight = `${containerWidth}px`;

//define square properties
let gridSize = 16;
let squareBorderWidth = 1;
let squareBorderStyle = 'solid';
let squareWidth = setSquareWidth(gridSize);


//create the grid of squares
function createGrid(gridSize){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    for(let i = 0; i < (gridSize*gridSize); i ++){
        let newDiv = document.createElement('div');
        newDiv.style.width = squareWidth;
        newDiv.style.height = squareWidth;
        newDiv.style.borderStyle = squareBorderStyle;
        newDiv.style.borderWidth = `${squareBorderWidth}px`;
        newDiv.className = 'square';
        container.appendChild(newDiv);
    }
}

createGrid(gridSize);

container.addEventListener('mouseover', changeColor);
container.addEventListener('mousedown', changeColor);

function changeColor(e){
    console.log(e);
    if(e.target.classList.contains('square') && e.buttons === 1){
        e.target.style.backgroundColor = 'black';
    }
}

let numberButton = document.querySelector('.numberSquares');
numberButton.addEventListener('click', changeGridSize);

function changeGridSize(){
    do{
        gridSize = parseInt(prompt('Enter the new grid size, maximum 100'));
    }while(gridSize>100 || gridSize<0);
    squareWidth = setSquareWidth(gridSize);
    createGrid(gridSize);
}

function setSquareWidth(gridSize){
    return `${containerWidth / gridSize - 2 * squareBorderWidth}px`;
}