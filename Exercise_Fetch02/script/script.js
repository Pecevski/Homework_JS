// Exercise 02
let button = document.getElementById(`callBtn`);

button.addEventListener(`click`, function (){
  fetch(" https://swapi.co/api/people/1")
  .then((response) => {
    console.log('The request succeeded!');
    return response.json();
  })
  .then((people) => {
    console.log(people);
    let divHeader = document.getElementById(`result`).firstElementChild;
    divHeader.innerHTML = people.name;

    let tbody = document.getElementsByTagName(`tbody`)[0];
    tbody.innerHTML = ``;

    let tr = document.createElement(`tr`);
    let td_1 = document.createElement(`td`);
    let td_2 = document.createElement(`td`);
    let td_3 = document.createElement(`td`);
    let td_4 = document.createElement(`td`);

    td_1.innerText = people.height;
    td_2.innerText = people.mass;
    td_3.innerText = people.hair_color;
    td_4.innerText = people.eye_color;

    tr.appendChild(td_1);
    tr.appendChild(td_2);
    tr.appendChild(td_3);
    tr.appendChild(td_4);
  
    tbody.appendChild(tr);

  })
  .catch((error) => {
    console.log(Error);
  })
})

