const grid = document.querySelector('#grid');
const brush = document.querySelector('#brush');
const button = document.querySelector('#brush');
let rows = 16;
let columns = rows;

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

//set up grid/brush size 
button.addEventListener('click', () => {
    let pixels = document.querySelectorAll('.pixels');
    for(let i = 0; i < pixels.length; i++){
        pixels[i].remove();
    };

    rows = prompt('enter new grid size (max: 100)');
    if (rows >= 100){rows = 100};
    console.log(pixels)

    creatPixels(rows);
    drawBlack();
});

// paint/draw with the mouse 
function drawBlack(){
    const draw = document.querySelectorAll('.pixels');
    for (let i = 0; i < draw.length; i++) {
        draw[i].addEventListener('mouseover', () => {
            draw[i].style.backgroundColor = '#000000';
        });
    };
};

function drawRainbow(){
    const draw = document.querySelectorAll('.pixels');
    for (let i = 0; i < draw.length; i++) {
        let rainbowColor = Math.floor(Math.random()*16777215).toString(16);
        draw[i].addEventListener('mouseover', () => {
            draw[i].style.backgroundColor = '#' + rainbowColor;
        });
    };

};

drawBlack();


