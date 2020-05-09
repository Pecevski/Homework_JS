// Task 0: Create an array

// PRV NACIN
function createArray(a,b) {

    let array = [];
    i = a;
    while((array[array.length] = i) < b){
    
        i++;
    }
    return array; 
}
console.log(createArray(1,10));


// VTOR NACIN
let myArray = [];
    for(let i = 1; i <= 10; i++){
        myArray.push(i);
    }
   
  console.log(myArray);


// Task 1: Return the First Element in an Array
let arr = [1,2,3,4,5,6,7,8,9,10];

function getFirstElement() {
    arr.shift();
}
console.log(arr.shift());


// Task 2: Reverse an Array
let array = [`Table`, `Desk`, `Board`, `Chair`, `Door`];

function reverseArray() {

    array.reverse();
}
console.log(array.reverse());


// Task 3: Find the Index
let arrayItems = [1,2,3,4,5,6,7,8,9,10];

function searchPlaceOfItem() {
    
    arrayItems.indexOf();
    
}
console.log(arrayItems.indexOf(9));
console.log(arrayItems.indexOf(5));
console.log(arrayItems.indexOf(11));


// Task 4: Check if an Array Contains a Given Number
function contains(arrayItem, item) {
    for (let i = 0; i < arrayItem.length; i++) {
        if (arr[i] === item) {
            return true;
        } 
    }
    return false;
}
let arrayItem = [1,2,3,4,5,6,7,8,9,10];
console.log(contains(arrayItem, 0));


// Task 5: Negate the Array of Numbers
function negateArrayNumbers() {
    let arrayNumbers = [2,-3,4,-5,6,-7];
    
    for(let i = 0; i < arrayNumbers.length; i++){
        let result = arrayNumbers[i] - (2 * arrayNumbers[i]);
        console.log(result);
    }  
  };
  negateArrayNumbers();



// Task 6: Difference of Max and Min Numbers in Array
let arrays = [78, 5, 25, 10, 15]; 

function diffMaxMin() { 
    
    let minValue = Infinity; 
    let maxValue = -Infinity; 

    for (item of arrays) { 
        // find minimum value 
        if (item < minValue) 
            minValue = item; 

        // find maximum value 
        if (item > maxValue) 
            maxValue = item; 
    } 
    let result = maxValue - minValue;
    return result;

} 
console.log(diffMaxMin());


// Task 7: Multiply by Length
function multiplayByLength() {
    let arr = [2,3,4,5];
    let length = arr.length;

    for(let i = 0; i < length; i++){
      let result = length * arr[i];
    
      console.log(result);
    }
}
multiplayByLength();



// Task 8: Hurdle Jump
function hurdleJump(ourArray, index) {
    
    if(ourArray.length < index){
        return true;
    } else {
        return false;
    }
}
let ourArray = [1,2,3,4,5];
console.log(hurdleJump(ourArray,6));


// Task 9: Generate a Countdown of Numbers in an Array
function countdown() {
    
    for(let i = 10; i >= 0; i--) {
        let arr = [i];  
        console.log(arr.reverse());
    }
    return arr;
}
countdown();


// Task 10: Odd Up, Even Down

// PRV NACIN
let arrLast = [2,3,4,5,6,7];

function oddUpEvenDown(arrLast) {
    
    for(let i = 0; i < arrLast.length - 1; i++){
        if (arrLast[i] % 2 === 0){
          arrLast[i] -= 1;
        } else {
          arrLast[i] += 1;
        }
    }
    console.log(arrLast); 
}
oddUpEvenDown(arrLast);


// VTOR NACIN
function oddUpEvenDowns() {
    let lastArr = [2,3,4,5,6,7,10];

    let transform = lastArr.map(value => {
        return (value % 2 === 0) ? --value : ++value; 

    });
    console.log(transform);
}
oddUpEvenDowns();




