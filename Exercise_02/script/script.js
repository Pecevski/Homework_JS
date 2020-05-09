// Exercise 02

$(document).ready(function(){
    document.getElementById(`callBtn`).addEventListener
    (`click`, function(){
        $.ajax({
            url: " https://swapi.co/api/people/1",
              success: function (response) {
                console.log('The request succeeded!');
                console.log(response);

                let divHeader = document.getElementById(`result`).firstElementChild;
                divHeader.innerHTML = response.name;

                let tbody = document.getElementsByTagName("tbody")[0];
                tbody.innerHTML = ``;

                let tr = document.createElement("tr");
                let td_1 = document.createElement("td");
                let td_2 = document.createElement("td");
                let td_3 = document.createElement("td");
                let td_4 = document.createElement("td");
                
                
                td_1.innerText = response.height;
                td_2.innerText = response.mass;
                td_3.innerText = response.hair_color;
                td_4.innerText = response.eye_color;
               
        
                tr.appendChild(td_1);
                tr.appendChild(td_2);
                tr.appendChild(td_3);
                tr.appendChild(td_4);
        
                tbody.appendChild(tr);


            }, 
              error: function(response){
                console.log('The request failed!');
                console.log(response.responseText);
            }
        });

    });

});

