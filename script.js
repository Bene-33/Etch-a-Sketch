const grid = document.querySelector('#grid');


function creatPixels(rows, columns){
    for(let i = 0; i < (rows * columns); i++){
        let pixels = document.createElement('div');
        pixels.classList.add('pixels');
        grid.appendChild(pixels);
    };
};

creatPixels(16,16);