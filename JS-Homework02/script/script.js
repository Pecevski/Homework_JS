// Task 01
//  Calculate the average of the three numbers

let num1 = 109;
let num2 = 215;
let num3 = 333;

let sum = num1 + num2 + num3;
let averageOfNumbers = sum / 3;

if (num1 > 0 && num2 > 0 && num3 > 0) {
    console.log(averageOfNumbers);
} else {
    console.log("You have input negative number or letter. Please input proper number!");
}



// Task 02
// Program for making an order

let makeOrder = prompt("Choose a drink: \n Coffee - 2$, \n Water - 1$, \n Wine - 5$, \n Juice - 3$, \n Beer - 4$, \n Whisky - 10$");

let coffeePrice = 2;
let waterPrice = 1;
let winePrice = 5;
let juicePrice = 3;
let beerPrice = 4;
let whiskyPrice = 10;


if (makeOrder == "Coffee"|| makeOrder == "coffee" ){
    let quantityInput = prompt("Enter quantity you want: ");
    let billTotal = coffeePrice * quantityInput;
    console.log(billTotal + "$");
} else if (makeOrder == "Water" || makeOrder == "water"){
    let quantityInput = prompt("Enter quantity you want: ");
    let billTotal = waterPrice * quantityInput;
    console.log(billTotal + "$");
} else if (makeOrder == "Wine" || makeOrder == "wine"){
    let quantityInput = prompt("Enter quantity you want: ");
    let billTotal = winePrice * quantityInput;
    console.log(billTotal + "$");
} else if (makeOrder == "Juice" || makeOrder == "juice"){
    let quantityInput = prompt("Enter quantity you want: ");
    let billTotal = juicePrice * quantityInput;
    console.log(billTotal + "$");
} else if (makeOrder == "Beer" || makeOrder == "beer"){
    let quantityInput = prompt("Enter quantity you want: ");
    let billTotal = beerPrice * quantityInput;
    console.log(billTotal + "$");
} else if (makeOrder == "Whisky" || makeOrder == "whisky"){
    let quantityInput = prompt("Enter quantity you want: ");
    let billTotal = whiskyPrice * quantityInput;
    console.log(billTotal + "$");
} else {
    console.log("Please make order from listed drinks!");
}



// Task 03
// Make a crystal ball program that predicts the future

let randomNumber = Math.floor((Math.random() * 5) + 1);

switch (randomNumber) {
    case 1:
        console.log("You are on the right track");
        break;
    case 2:
        console.log("Danger is near");
        break;
    case 3:
        console.log("Luck will find you");
        break;
    case 4:
        console.log("You are about to make a mistake");
    case 5:
        console.log("Your future is unclear");
        break;
    default:
        console.log("Choose a number!")
        break;
}