// Create a greeting app with JQuery

// Selector
let input = $(`input`);
let button = $(`#btn`);
let headerOne = $(`#header`);

// Event
button.click (function(){
    let inputVal = $(`input`).val();
    $(`#header`).text(`Helo there ${inputVal}!`);
})




