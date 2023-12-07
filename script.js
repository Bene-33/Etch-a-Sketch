const grid = document.querySelector('#grid');

//creat grid rows x columns
function creatPixels(rows, columns){
    for(let i = 0; i < (rows * columns); i++){
        let pixels = document.createElement('div');
        pixels.classList.add('pixels');
        grid.appendChild(pixels);
    };
};
creatPixels(16,16);

const draw = document.querySelectorAll('.pixels');

// paint with the mouse 
for (let i = 0; i < draw.length; i++) {
    draw[i].addEventListener('mouseover', () => {
        draw[i].classList.toggle('black');
    })
}