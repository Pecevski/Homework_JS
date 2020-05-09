// HOMEWORK Part 1 - Change the text of all paragraphs and headers with javascript

let firstParagraph = document.querySelector(`.paragraph`);
firstParagraph.innerText = `This is changed!`;
// console.log(paragraph);

let secondParagraph = document.querySelector(`.second`);
secondParagraph.innerText = `This text is changed, also!`

let headerOne = document.getElementById(`myTitle`);
headerOne.innerText = `First header is changed!`;

document.querySelectorAll(`div`)[2]
.querySelector(`h1`)
.innerText = "I did it again, change is made!";

document.querySelectorAll(`div`)[2]
.querySelector(`h3`)
.innerText = "This header is changed,also!"

