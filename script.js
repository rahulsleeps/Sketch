const sizeButton = document.querySelector(".Size"); // This is the size selector
const eraserButton = document.querySelector(".Eraser");
const clearButton = document.querySelector(".Clear");
const colorButton = document.querySelector(".color");
const coloPicker = document.querySelector(".color input");

const grid = document.querySelector(".grid"); // the actual grid
let gridSize = 32;


// function for changing number for boxes, updating size button content
function gridBoxes(boxGrid){

    if(boxGrid === null || boxGrid === undefined || boxGrid === 0){
        return;
    }

    if(boxGrid > 64){
        alert("Max grid size: 64");
        return;
    }

    gridSize = boxGrid;

    while(grid.hasChildNodes()){

        grid.removeChild(grid.firstChild)
    }

    for (let i = 0; i < boxGrid**2; i++) {

        const box = document.createElement('div');
        box.classList.add('box');

        box.style.height = `${600/boxGrid}px`;
        box.style.width = `${600/boxGrid}px`;
        
        grid.appendChild(box);
    }

    sizeButton.textContent = `Size : ${gridSize} X ${gridSize}`;
    cellColor(coloPicker.value);
}

gridBoxes(32);

sizeButton.addEventListener('click', () => {gridSize = prompt("Enter the grid size")})
sizeButton.addEventListener('click', () => {gridBoxes(gridSize)});

function cellColor(color){
    const cellsArray = document.querySelectorAll('.box');
    cellsArray.forEach(cell => cell.addEventListener('mouseover', (e) => {e.target.style.backgroundColor = `${color}`}))
}

coloPicker.addEventListener('change', () => {cellColor(coloPicker.value)});
eraserButton.addEventListener('click', () => {cellColor('#ffffff')});

clearButton.addEventListener('click', () => {
    const cellsArray = document.querySelectorAll('.box');
    cellsArray.forEach(cell => cell.style.backgroundColor = '#ffffff')
});

window.onload = () => {
    coloPicker.value = '#000000';
    cellColor(coloPicker.value);
};