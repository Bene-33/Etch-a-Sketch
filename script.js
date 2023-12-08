const grid = document.querySelector('#grid');
const brush = document.querySelector('#brush');
const button = document.querySelector('#brush');
let columns = 16;
let rows = columns;

//creat grid rows x columns
function creatPixels(rows, columns){
    for(let i = 0; i < (rows * columns); i++){
        let pixels = document.createElement('div');
        pixels.classList.add('pixels');
        grid.appendChild(pixels);
    };
};
creatPixels(rows,columns);

const draw = document.querySelectorAll('.pixels');

// paint with the mouse 
for (let i = 0; i < draw.length; i++) {
    draw[i].addEventListener('mouseover', () => {
        draw[i].classList.toggle('black');
    })
};

button.addEventListener('click', () => {
    return columns = prompt('enter new grid size'),
    creatPixels(rows, columns)
});