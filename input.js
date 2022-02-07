const search = document.querySelector('#search');
const body = document.querySelector('body');

const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('keyup', (e) => {

    if(e.keyCode ===13){
        e.preventDefault();
        searchBtn.click();

    }
   
});

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchValue = search.value;
    console.log(searchValue);
    body.style.backgroundColor = searchValue;

});

