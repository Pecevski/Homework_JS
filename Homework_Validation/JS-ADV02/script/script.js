// Global

let listOfStudents = [];

// Selectors

let registerBtn = document.getElementById(`register`);

let inputFirstName = document.getElementById(`fName`);
let inputLastName = document.getElementById(`lName`);
let inputBirthYear = document.getElementById(`birthYear`);
let inputAcademy = document.getElementById(`academy`);
let inputGrades = document.getElementById(`grades`);

let tbody = document.getElementsByTagName("tbody")[0];


// Constructor Function

function Student(firstName, lastName, birthYear, academy, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function(){
        return  new Date().getFullYear() - this.birthYear;
    }

    this.getInfo = function(){
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`
    }

    this.getGradesAverage = function(){
        let sum = 0;

        for(let i = 0; i < this.grades.length; i++){
            sum += this.grades[i];
            
        }
        
        return sum / this.grades.length;
    }
}

let petar = new Student(`Petar`, `Petrovski`, 1990, `SEDC`, [1, 2, 5]);
listOfStudents.push(petar);
// console.log(`Petar:`, petar)
let petarsAge = petar.getAge();

// with saving
// console.log(petarsAge);

// without saving, direct call
// console.log(petar.getAge());

let petarInfo = petar.getInfo();
// console.log(petarInfo);

let petarGradesAvg = petar.getGradesAverage();
// console.log(petarGradesAvg);


let stojan = new Student(`Stojan`, `Stojkovski`, 1903, `SEDC`, [2,5,4,5,1,2,]);
listOfStudents.push(stojan);

let stojanAge = stojan.getAge();
// console.log(stojanAge);

let stojanInfo = stojan.getInfo();
// console.log(stojanInfo);

let stojanGradesAvg = stojan.getGradesAverage();
// console.log(stojanGradesAvg);

// console.log(listOfStudents);

function printStudents(listOfStudents) {

    tbody.innerHTML = ``;
    for (let student of listOfStudents) {
        let tr = document.createElement("tr");
        let td_1 = document.createElement("td");
        let td_2 = document.createElement("td");
        let td_3 = document.createElement("td");
        let td_4 = document.createElement("td");
        let td_5 = document.createElement("td");
        let td_6 = document.createElement("td");
        let td_7 = document.createElement("td");
        console.log(student);
        
        
        td_1.innerText = student.firstName;
        td_2.innerText = student.lastName;
        td_3.innerText = student.birthYear;
        td_4.innerText = student.academy;
        td_5.innerText = student.grades;
        td_6.innerText = student.getAge();
        td_7.innerText = student.getGradesAverage();

        tr.appendChild(td_1);
        tr.appendChild(td_2);
        tr.appendChild(td_3);
        tr.appendChild(td_4);
        tr.appendChild(td_5);
        tr.appendChild(td_6);
        tr.appendChild(td_7);

        tbody.appendChild(tr);
    }
}



// Events

registerBtn.addEventListener(`click`,checkInputs)

function checkInputs(){

    let firstName = inputFirstName.value;
    let lastName = inputLastName.value;
    let birthYear = inputBirthYear.value;
    let academy = inputAcademy.value;
    let grades = inputGrades.value.split(`,`).map(function(i){
        return parseInt(i);
    })

    if(firstName !==`` && lastName !==`` && birthYear !==`` && academy !==`` &&  grades !==[] ){

        registerBtn.removeEventListener(`click`, checkInputs);
        registerBtn.addEventListener(`click`,registration);
        
    }else{
        alert("Please fill in all of the inputs to continue");
    }
   
}


registerBtn.addEventListener(`click`,registeredStudent);
function registeredStudent() {
    
    let studentRegistered = true;
    let firstName = inputFirstName.value;
    let lastName = inputLastName.value;
    let birthYear = inputBirthYear.value;
    let currentStudent = new Student(firstName, lastName, birthYear, academy, grades);

    for(let student of listOfStudents){
        if(student.firstName !== currentStudent.firstName || student.lastName !== currentStudent.lastName 
           || student.birthYear !== currentStudent.birthYear) {
            studentRegistered = true;
            // listOfStudents.push(currentStudent);
            registerBtn.addEventListener(`click`,registration);
        } else {
            studentRegistered = false;
            alert(`Student already exist!`);
            
        }
    }

}



 function registration(){
    registerBtn.removeEventListener(`click`, registration);
    registerBtn.addEventListener(`click`,checkInputs);
    registerBtn.addEventListener(`click`,registeredStudent);
    
    let firstName = inputFirstName.value;
    let lastName = inputLastName.value;
    let birthYear = inputBirthYear.value;
    let academy = inputAcademy.value;
    let grades = inputGrades.value.split(`,`).map(function(i){
        return parseInt(i);
    })  
       
    let newStudent = new Student(firstName, lastName, birthYear, academy, grades);
    // console.log(newStudent);

    listOfStudents.push(newStudent);
    // console.log(listOfStudents);

    printStudents(listOfStudents);
    // console.log(printStudents(listOfStudents));

 }


 