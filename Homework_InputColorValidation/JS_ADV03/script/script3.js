// Global
let reminders = [];

let arrColors = [`red`, `blue`, `green`, `yellow`, `gray`, `purple`, `brown`, `white`, `black`, `magenta`];

// Selectors

let inputTitle = document.getElementById(`title`);
let inputPriority = document.getElementById(`priority`);
let inputColor = document.getElementById(`color`);
let description = document.getElementById(`description`);

let buttonAdd = document.getElementById(`add-reminder`);
let buttonShow = document.getElementById(`show-reminder`);

let tab = document.querySelector(`tbody`);

// Function

function Reminder(title, priority, color, description){
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
}

// Event

buttonAdd.addEventListener(`click`, function(){
    let titleVal = title.value;
    let priorityVal = priority.value;
    let colorVal = color.value;
    let descVal = description.value;

    let newReminder = new Reminder(titleVal, priorityVal, colorVal, descVal);

    if(titleVal === `` || priorityVal === `` || colorVal === `` || descVal === ``){
        alert(`PLease fill the inputs!`);
    
    } else if(!arrColors.includes(colorVal)){
        alert(`That color isn't an option.Please choose another one!`);
    } else {
        reminders.push(newReminder);
    }

    // console.log(reminders);
    // showReminders();

})

buttonShow.addEventListener(`click`, showReminders);

function showReminders(){
    document.querySelector(`tbody`).innerHTML = ``;

    for(let reminder of reminders){
        let tr = document.createElement(`tr`);

        let td1 = document.createElement(`td`);
        let td2 = document.createElement(`td`);
        let td3 = document.createElement(`td`);

        let tbody = document.querySelector(`tbody`);

        td1.innerText = reminder.title;
        td1.style.color = reminder.color;
        td2.innerText = reminder.priority;
        td3.innerText = reminder.description;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);
    }
}