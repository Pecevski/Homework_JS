// Global
let arrAnimal = [`dog`, `cat`, `horse`, `rabbit`, `mouse`];

// Selectors
let button = document.querySelector(`button`);
let inputText = document.getElementById(`search`);
let headerOne = document.querySelector(`h1`);

// Function

// Event

button.addEventListener(`click`, function(){

    let input = inputText.value;

    for(let animal of arrAnimal){
        if(animal && animal.toLowerCase() === input.toLowerCase()){
            headerOne.style.color = `green`;
            headerOne.innerText =`The animal can be adopted`;
            return;
        } 
    } 
    
    headerOne.style.color = `red`;
    headerOne.innerText =`The animal can't be adopted`;

})