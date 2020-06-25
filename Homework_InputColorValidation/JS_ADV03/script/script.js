// Global

let colorArray = [`red`, `blue`, `green`, `yellow`, `gray`];

// Selectors

let header = document.getElementById(`header`);
let ul = document.querySelector(`ul`);
let button = document.getElementById(`button`);

// Function

// Event
button.addEventListener(`click`, function(){
    ul.innerHTML = ``;
    for(let i = 0; i < colorArray.length; i++){

        let li = document.createElement(`li`);
        li.innerText = colorArray[i];
        li.style.color = colorArray[i];

        ul.appendChild(li);       
    
    }

})
