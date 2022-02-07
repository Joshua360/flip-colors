//an array of all colors
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'violet', 'indigo', 'lime', 'teal', 'cyan', 'magenta', 'crimson', 'maroon', 'olive', 'navy', 'silver', 'gold', 'gray', 'crimson', 'maroon', 'olive', 'navy', 'silver', 'gold', 'gray'];

const colorSpan = document.querySelector('.color');
const h3 = document.querySelector('.instruction');

const btn = document.querySelector('.clickme');
const body = document.querySelector('body');

const changeColor = ()=>{
    const randomNumber = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[randomNumber];
    colorSpan.innerText = colors[randomNumber];

    if(colors[randomNumber] == 'white' || colors[randomNumber] == 'yellow'){
        h3.style.color = 'black';
    }else {
        h3.style.color = 'white';
    }
}

btn.addEventListener('click', changeColor);

console.log(document.body.style.backgroundColor);