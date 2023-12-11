const grid = document.querySelector('#grid');
const brush = document.querySelector('#brush');
const button = document.querySelector('#brush');
let rows = 32;
let columns = rows;
let color = ['black'];

//creat grid rows x columns
function creatPixels(rows){
    for(let i = 0; i < (rows); i++){
        let row = document.createElement('div');
        row.classList.add('row', 'pixels');
        for(let j = 0; j < rows; j++){
            let columns = document.createElement('div');
            columns.classList.add('column', 'pixels');
            row.appendChild(columns);
        };
        grid.appendChild(row);
    };
};

creatPixels(rows);

// paint/draw with the mouse 
const draw = document.querySelectorAll('.pixels');
for (let i = 0; i < draw.length; i++) {
    draw[i].addEventListener('mouseover', () => {
        draw[i].classList.add(color[0]);
    })
};

//set up grid/brush size 
button.addEventListener('click', () => {
    columns = prompt('enter new grid size');
    if (columns >= 100){columns = 100};
});