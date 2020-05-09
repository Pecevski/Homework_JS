// Global variable - array

let story = [`There was a hero named Who.`, `He lived in Where in the times of When.`, `It was a great hero indeed.`];

// Selectors

let firstDiv = document.getElementById(`container`);
let showStoryDiv = document.querySelector(`#showStory`);
let addWhoInput = document.getElementById(`addWho`);
let addWhereInput = document.getElementById(`addWhere`);
let addWhenInput = document.getElementById(`addWhen`);


// Function
function addToStory(inputWho, inputWhere, inputWhen) {
    if(typeof(inputWho) === `string`
     && typeof(inputWhere) === `string` 
     && typeof(inputWhen) === `string`) {
        story.push(inputWho, inputWhere, inputWhen);

        return `There was a hero named <b>${inputWho}</b>. </br>He lived in <b>${inputWhere}</b> in the times of <b>${inputWhen}</b>.</br> It was a great hero indeed.`; 
    }
    return `Input a proper word.`
}



// Event

firstDiv.querySelector(`button`)
.addEventListener(`click`, function(){
    let inputWho = addWhoInput.querySelector(`input`).value;
    let inputWhere = addWhereInput.querySelector(`input`).value;
    let inputWhen = addWhenInput.querySelector(`input`).value;

    let text = addToStory(inputWho, inputWhere, inputWhen);
    showStoryDiv.innerHTML = text;

});

firstDiv.querySelector(`input`)
.addEventListener(`keypress`, function(event){
    if(event.keyCode === 13){
        let inputWho = addWhoInput.querySelector(`input`).value;
    
        let inputWhere = addWhereInput.querySelector(`input`).value;
    
        let inputWhen = addWhenInput.querySelector(`input`).value;
    

        let text = addToStory(inputWho, inputWhere, inputWhen);
        showStoryDiv.innerHTML = text;
    }
    
});