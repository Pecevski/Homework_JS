// Global

// Selectors

let button = document.getElementById(`btn`);
let tbody = document.getElementsByTagName("tbody")[0];


// Event 

button.addEventListener(`click`, () => { 
    fetch(`https://api.myjson.com/bins/dqjo2`)
    .then((response) =>{
        console.log(`response has arrived`)
        return response.json();
    })
    .then((dogs) => {
        console.log(dogs);

        tbody.innerHTML = ``;

        dogs.forEach(dog => {
            let tr =  document.createElement(`tr`);

            for(let [key,value] of Object.entries(dog)){

                let td = document.createElement(`td`);
                value = key !== `age` ? value : value <= 1 ? `puppy` : value;
                td.innerText = value;

                tr.appendChild(td);
            }

            tbody.appendChild(tr);
        })

    })
    .catch((error) =>{
        console.log(error);
    })
})
