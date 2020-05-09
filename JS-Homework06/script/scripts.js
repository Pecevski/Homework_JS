// HOMEWORK Part 2 - Print all numbers from an array and the sum

let div = document.querySelector(`.container`);


function createArray(a,b) {

    let array = [];
    i = a;
    while((array[array.length] = i) < b){
    
        i++;
    }
    return array; 
}
let array = createArray(1,10);


function printNumbers(array) {
    let ul = document.createElement('ul');

    for(let i = 0; i < array.length; i++)
    {
        let li = document.createElement('li');
        li.innerText = `${array[i]}`;
        ul.appendChild(li);
    }

    div.appendChild(ul);
}

let printOut = printNumbers(array);



function sumNumbers(array) {
    let p = document.createElement(`p`);
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        // let li = document.createElement('li');
    }
    p.innerText = `${sum}`;

    div.appendChild(p);
}

let printResult = sumNumbers(array);
    

