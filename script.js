const sizeButton = document.querySelector(".Size"); // This is the size selector
const grid = document.querySelector(".grid"); // the actual grid
let gridSize = 32;
let cellsArray = [];


// function for changing number for boxes, updating size button content and changing cellsArray value
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
    cellsArray = document.querySelectorAll('.box');
    cellsArray.forEach(cell => cell.addEventListener('mouseover', colorFill))
}

gridBoxes(32);

sizeButton.addEventListener('click', () => {gridSize = prompt("Enter the grid size")})
sizeButton.addEventListener('click', () => {gridBoxes(gridSize)});

function colorFill(e){
    
  e.target.style.backgroundColor = `${document.querySelector('.color input').value}`;
}