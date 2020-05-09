// Exercise 01

let button = document.getElementById(`callBtn`);

button.addEventListener(`click`, function(){
  fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g1/Class04-AJAX/students.json")
    .then((response) => {
        console.log('The request succeeded!');
        return response.json(); 
    })
    .then((resultParsed) => {
        console.log(resultParsed);

        let divHeader = document.getElementById(`result`).firstElementChild;
        divHeader.innerHTML = resultParsed.academy;

        let ul = document.querySelector(`ul`);
        ul.innerHTML = ``;

        for(let student of resultParsed.students){

        let li = document.createElement(`li`);
        li.innerText = student;

        ul.appendChild(li);
        }

    })
    .catch((error) => {
        console.log(error);
              
    })
})
