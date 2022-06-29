const gridSize = document.querySelector(".Size"); // This is the size selector
const grid = document.querySelector(".grid"); // the actual grid
let boxes = 0;


// function for changing number for boxes
function gridBoxes(boxGrid){

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
}

gridBoxes(32);

gridSize.addEventListener('click', () => {boxes = prompt("Enter the grid size")})
gridSize.addEventListener('click', () => {gridBoxes(boxes)});