// Function for converting humans to dogs years 
function dogsAgeConvertToHumans() {
    let humansAge = prompt(`Input humans age: `);
    let convertAge = humansAge * 7;

    return convertAge;
}

console.log(dogsAgeConvertToHumans());

// Function  for converting dog to human years 
function humansAgeConvertToDogs() {
    let dogsAge = prompt(`Input dogs age: `);
    let convertAge = dogsAge / 7;

    return convertAge;
}

console.log(humansAgeConvertToDogs());