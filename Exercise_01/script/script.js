// Exercise 01

$(document).ready(function(){
    document.getElementById(`callBtn`).addEventListener
    (`click`, function(){
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g1/Class04 - AJAX/students.json",
              success: function (response) {
                console.log('The request succeeded!');
                let resultParsed = JSON.parse(response);
                console.log(resultParsed);
                
                let divHeader = document.getElementById(`result`).firstElementChild;
                divHeader.innerHTML = resultParsed.academy;


                let ul = document.querySelector(`ul`)
                ul.innerHTML = ``;

                for(let student of resultParsed.students){

                let li = document.createElement(`li`);
                li.innerText = student;

                ul.appendChild(li);
            }

            }, 
              error: function(response){
                console.log('The request failed!');
                console.log(response.responseText);
            }
        });

    });

});