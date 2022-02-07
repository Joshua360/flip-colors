const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'violet', 'indigo', 'lime', 'teal', 'cyan', 'magenta', 'crimson', 'maroon', 'olive', 'silver', 'gray', 'crimson', 'maroon', 'olive', 'navy', 'silver', 'gold'];

const divContainer = document.querySelector('.all-div');

const createDiv = (color)=>{

    let textColor = 'white';

    if(color === 'white' || color ==='yellow'){
        textColor = 'black';
    }
    
    const div = `<div style="background: ${color}; color:${textColor}" class="item">${color}</div>`;
    divContainer.innerHTML += div;

}

for(let i=0; i<colors.length; i++){
    createDiv(colors[i]);

}