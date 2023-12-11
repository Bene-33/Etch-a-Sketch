const grid = document.querySelector('#grid');
const brush = document.querySelector('#brush');
const button = document.querySelector('#brush');
let columns = 16;
let rows = columns;
let color = ['black'];

//creat grid rows x columns
function creatPixels(rows, columns){
    for(let i = 0; i < (rows * columns); i++){
        let pixels = document.createElement('div');
        pixels.classList.add('pixels');
        grid.appendChild(pixels);
    };
};

creatPixels(rows,columns);

// paint/draw with the mouse 
const draw = document.querySelectorAll('.pixels');
for (let i = 0; i < draw.length; i++) {
    draw[i].addEventListener('mouseover', () => {
        draw[i].classList.add(color[0]);
    })
};

//set up grid/brush size 
button.addEventListener('click', () => {
    columnsNew = prompt('enter new grid size');
    if (columnsNew >= 100){columnsNew = 100};
});