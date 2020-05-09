// Create a header generator
// Selector

let textInput = $(`#text`);
let colorInput = $(`#color`);
let button = $(`#btn`);
let messageHeader = $(`#message`);


// Event

button.click( function() {
   let inputText = $(`#text`).val();
   let inputColor =  $(`#color`).val();
   let message = $(`#message`).toggle(true);
   
   if(inputText === `` || inputColor === ``) {
    $(`#message`).text(`Error message`);
    return;
    }
    let headerOne = $(`#message`).before($(`<h1></h1>`).text(inputText).css(`color`,inputColor)).toggle();
})
