// Global 

let dogsArray = [
    {
      name: 'Aron',
      breed: 'Golden Retriever',
      hair: 'Medium',
      size: 'Large',
      age: 1,
      color: 'Golden'
    },
    {
      name: 'Jack',
      breed: 'Fox terrier',
      hair: 'Short',
      size: 'Medium',
      age: 10,
      color: 'White-brown'
    },
    {
      name: 'Hector',
      breed: 'Dogo Argentino',
      hair: 'Short',
      size: 'Extra large',
      age: 1,
      color: 'White'
    },
    {
      name: 'Alfa',
      breed: 'Great Dane',
      hair: 'Short',
      size: 'Extra large',
      age: 5,
      color: 'Gray'
    },
    {
      name: 'Bono',
      breed: 'French bulldog',
      hair: 'Short',
      size: 'Small',
      age: 6,
      color: 'Black'
    }
];

// Selectors

let button = document.getElementById(`btn`);
let tbody = document.getElementsByTagName("tbody")[0];


// Event

button.addEventListener(`click`, () => {
    
    tbody.innerHTML = ``;
    for(let dogs of dogsArray){
        if(dogs.age <= 1){
            return dogs.age = `puppy`;
        }

        let tr = document.createElement("tr");
        let td_1 = document.createElement("td");
        let td_2 = document.createElement("td");
        let td_3 = document.createElement("td");
        let td_4 = document.createElement("td");
        let td_5 = document.createElement("td");
        let td_6 = document.createElement("td");
        
        
        td_1.innerText = dogs.name;
        td_2.innerText = dogs.breed;
        td_3.innerText = dogs.hair;
        td_4.innerText = dogs.size;
        td_5.innerText = dogs.age;
        td_6.innerText = dogs.color;
        

        tr.appendChild(td_1);
        tr.appendChild(td_2);
        tr.appendChild(td_3);
        tr.appendChild(td_4);
        tr.appendChild(td_5);
        tr.appendChild(td_6);
       

        tbody.appendChild(tr);

    }
})