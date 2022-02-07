const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('.clickme');
const colorSpan = document.querySelector('.color');
const body = document.querySelector('body');
const changeColor = () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    body.style.backgroundColor = hexColor;
    colorSpan.innerText = hexColor;
}
btn.addEventListener('click', changeColor);
