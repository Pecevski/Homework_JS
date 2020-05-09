// Task 01
function testNumber(number) {
    return new Promise((resolve, reject) => {
        if (number <= 10) {
            setTimeout(() => {
                resolve(`It's successfull!`);
            }, 2000);
        }
        setTimeout(() => {
            reject(`Rejected!`);
        }, 2000);
    })
}

testNumber(10).then(success => {
        console.log(success);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => console.log(`It's done at: ${new Date()}`))

// Task 02
// Part 01
let wordArray = [`dog`, `cat`, `hat`, `rat`, `bird`];

function changeAllToCaps(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < wordArray.length; i++) {
                if (typeof wordArray[i] === 'string') {
                    wordArray[i] = wordArray[i].toUpperCase();
                }
            }
            resolve(wordArray);
        }, 2000);
        setTimeout(() => {
            reject(`Reject!`);
        }, 2000);
    })
}

// Part 02
function sortAscending(array) {
    if (array.length <= 1) {
        console.log(`There are not enough words to be sorted.`);
    }
    return array.sort();
}

// console.log(sortAscending(wordArray));

changeAllToCaps(wordArray).then(wordArray => {
        sortAscending(wordArray);
        console.log(wordArray);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => console.log(`Done at: ${new Date()}`))