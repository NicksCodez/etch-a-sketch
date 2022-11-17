let container = document.querySelector('#container');

//define container size
let containerWidth = 960;
container.style.maxWidth = `${containerWidth}px`;
container.style.maxHeight = `${containerWidth}px`;

//define square properties
let gridSize = 16;
let squareBorderWidth = 1;
let squareBorderStyle = 'solid';
let squareWidth = `${containerWidth / gridSize - 2 * squareBorderWidth}px`;


//create the grid of squares
for(let i = 0; i < (gridSize*gridSize); i ++){
    let newDiv = document.createElement('div');
    newDiv.style.width = squareWidth;
    newDiv.style.height = squareWidth;
    newDiv.style.borderStyle = squareBorderStyle;
    newDiv.style.borderWidth = `${squareBorderWidth}px`;
    newDiv.className = 'square';
    container.appendChild(newDiv);
}

container.addEventListener('mouseover', changeColor);
container.addEventListener('mousedown', changeColor);

function changeColor(e){
    console.log(e);
    if(e.target.classList.contains('square') && e.buttons === 1){
        e.target.style.backgroundColor = 'black';
    }
}
