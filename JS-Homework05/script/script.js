//HOMEWORK Part 1 - The sum of the MAX and MIN numbers from an array

let arrays = [78, 5, 25, 10, 15, 2, 28, 79, 8]; 
function sumMaxMin() { 
    
    let minValue = Infinity; 
    let maxValue = -Infinity; 

    for (item of arrays) { 
        
        if (item < minValue)
            minValue = item; 
        
                
        if (item > maxValue) 
            maxValue = item; 
      
    } 
    let result = maxValue + minValue;  
    return result;
} 
console.log(sumMaxMin()); 



// HOMEWORK Part 2 - new array with students full names

function studentsFullName() {
    let listNum = 1;
    let firstName = ["Bob", "Jill", "John", "Mary", "Pete"];
    let lastName = ["Gregory", "Wurtz", "Smith", "Key", "Hunt"];
    let fullName = [];

    for (let i = 0; i < firstName.length; i++) {
      fullName.push(`${listNum}. ${firstName[i]} ${lastName[i]}`);
      listNum ++;
    }
      console.log(fullName);
}
  studentsFullName();


//   POGRESEN NACIN - Izbegnuvaj MAP
// let firstName = ["Bob", "Jill", "John", "Mary", "Pete"]; 
// let lastName = ["Gregory", "Wurtz", "Smith", "Key", "Hunt"];

// function studentsFullName() {
//     let listNum = 1;
//     let arr =[firstName,lastName]; 
//     for(let i = 0; i < firstName.length; i++){
        
//         let arrMapped = arr.map(item =>({  
//             fullName: `${listNum}. ${firstName[i]} ${lastName[i]}`}));
            
//             // console.log(arrMapped[0].fullName);
//             listNum ++;
//     }
        
// }
// studentsFullName();
