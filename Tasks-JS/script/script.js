// Task 1: Convert Minutes into Seconds

function convertMinutesToSeconds(minutes) {
    let result = minutes * 60;
    return result;
}
convertMinutesToSeconds(100);


// Task 2: Return the Next Number from the Integer Passed

function nextNumber(number) {
    let result = number + 1;
    return result;
}

nextNumber(12);

// Task 3: Convert Hours into Seconds

function convertHoursToSeconds(hours) {
    let result = hours * 3600;
    return result;
}
convertHoursToSeconds(3);

// Task 4: Return the Remainder from Two Numbers

function remainderOfTwoNumbers(x, y){
    let result = x % y;
    return result;
}

remainderOfTwoNumbers(7,4);

// Task 5: The Farm Problem

function farmAnimals(chickens, cows, pigs) {
    let chickenLegs = chickens * 2;
    let cowLegs = cows * 4;
    let pigLegs = pigs * 4;

    let result = chickenLegs + cowLegs + pigLegs;
    return result;
}

farmAnimals(5, 2, 3);

// Task 6: Compare Strings by Count of Characters

function compareStrings(firstString, secondString) {
    if( firstString.length == secondString.length){
        return true;
    } else {
        return false;
    }
}

compareStrings("on", "off");

// Task 7: Is the Word Singular or Plural?

function isPlural(string) {
    if(string.endsWith (`s`)){
        return true;
    } else {
        return false;
    }
}

console.log(isPlural(`shoes`));

// Task 8: Case Insensitive Comparison

function caseInsensitive(firstString, secondString) {
    if(firstString.toLowerCase() === secondString.toLowerCase()){
        return true;
    } else {
        return false;
    }
}

console.log(caseInsensitive("word", "hEllo"));
console.log(caseInsensitive("hello", "hElLo"));

// Task 9: Convert Number to Corresponding Month Name

function convertNumberToMonth(month) {
    
    switch (month) {
        
        case 1:
            return "January";
            
        case 2:
            return "February";
            
        case 3:
            return "March";
            
        case 4:
            return "April";
           
        case 5:
            return "May";
            
        case 6:
            return "June";
           
        case 7:
            return "July";
            
        case 8:
            return "August";
            
        case 9:
           return "September";
            
        case 10:
            return "October";
            
        case 11:
            return "November";
            
        case 12:
            return "December";
           
        default:
            return "Month with that number does not exists";
    }
}

console.log(convertNumberToMonth(13));

// Task 10: Truthy or Falsy?

function isTruthy(value) {
    if(value) {
        return "1";
    } else {
        return "0";
    }
}

console.log(isTruthy(false));