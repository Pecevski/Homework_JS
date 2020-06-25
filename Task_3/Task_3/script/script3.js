// Task 3
// Selectors

let headerOne = document.getElementById(`header`);
let button = document.getElementById(`btn`);
let inputText = document.getElementById(`title`);

let smallBtn = document.getElementById(`small`);
let normalBtn = document.getElementById(`normal`);
let largeBtn = document.getElementById(`large`);

let greenDiv = document.getElementById(`green`);
let blueDiv = document.getElementById(`blue`);
let yellowDiv = document.getElementById(`yellow`);
let redDiv = document.getElementById(`red`);







// Event

button.addEventListener(`click`, function(){

    let inputText = document.getElementById(`title`);
    
    headerOne.innerHTML = inputText.value;

})


// Font Buttons
smallBtn.addEventListener(`click`, function(){

    headerOne.style.fontSize = `20px`;
})

normalBtn.addEventListener(`click`, function(){

    headerOne.style.fontSize = `30px`;
})

largeBtn.addEventListener(`click`, function(){

    headerOne.style.fontSize = `40px`;
})



// Color Buttons
greenDiv.addEventListener(`click`, function(){

    headerOne.style.backgroundColor = `green`;
})

blueDiv.addEventListener(`click`, function(){

    headerOne.style.backgroundColor = `blue`;
})

yellowDiv.addEventListener(`click`, function(){

    headerOne.style.backgroundColor = `yellow`;
})

redDiv.addEventListener(`click`, function(){

    headerOne.style.backgroundColor = `red`;
})