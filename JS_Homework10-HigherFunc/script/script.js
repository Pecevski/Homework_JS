// https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json
let students = [];

fetch(`https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json`)
    .then((responce) => responce.json())
    .then((students) => {
        // console.table(students);
        students.forEach(student =>
            console.log(`${student.firstName} ${student.lastName} is comming from ${student.city}, he is ${student.age} years old and he is ${student.averageGrade > 1 ? 'Passing' : 'Failing'} the class.`));
        // console.log(everyStudent(students));
        console.table(maleStudentsOtherCity(students));
        console.table(femaleStudents(students));
        console.log(averageAgeStudents(students) / students.length);
        console.table(femaleStudentsEndA(students));
    })
    .catch(error => console.log(error))

// Task 01 - For every student log the following sentence:
// "FULL_NAME is comming from CITY, he is AGE years old and he is FAILING/PASSING the class" (FILING if his average greade is 1, PASSING if it's 2 or more).
// let everyStudent = students => students.forEach(student =>
//     console.log(`${student.firstName} ${student.lastName} is comming from ${student.city}, he is ${student.age} years old and he is ${student.averageGrade > 1 ? 'Passing' : 'Failing'} the class.`));

// Task 02 - All male students that are not from Skopje
let maleStudentsOtherCity = students => students.filter(student => student.gender === 'Male' && student.city !== `Skopje`)

// Task 03 - All female students that are not under 18 years old.
let femaleStudents = students => students.filter(student => student.gender === `Female` && student.age > 18)

// Task 04 - The average age of the students.
let averageAgeStudents = students => students.map(student => student.age)
    .reduce((sum, age) => sum += age, 0)

// Task 05 - All female students with a last name ending with A.
let femaleStudentsEndA = students => students.filter(student => student.gender === `Female` && student.lastName.endsWith(`a`))