
// Selectors

let contentDiv = document.getElementById(`container`);
let showTableDiv = document.querySelector(`#showTable`);
let addRowInput = document.getElementById(`addRow`);
let addColumnInput = document.getElementById(`addColumn`);



// Function
function addRowColumn(inputRow, inputColumn) {
    // let tableElem;
    // let rowElem;
    // let columnElem;
    let tableElem = '<table border = 3px solid black, style = "width : 50%">';

    if (inputRow === `` || inputColumn === ``) {
        return `Please enter some number!`;
    } else {
        // tableElem = document.createElement('table');

        for (let i = 0; i < inputRow; i++) {
            // rowElem = document.createElement('tr');
            tableElem += '<tr>';

            for (var j = 0; j < inputColumn; j++) {
                // columnElem = document.createElement('td');
                // rowElem.appendChild(columnElem);
                tableElem +='<td>1</td>';
            }
            tableElem +='</tr>';
            // tableElem.appendChild(rowElem);
        }
        return tableElem; 
    }

}



// Event

contentDiv.querySelector(`button`)
.addEventListener(`click`, function(){
    let inputRow = addRowInput.querySelector(`input`).value;
    let inputColumn = addColumnInput.querySelector(`input`).value;
    
    let tableContent = addRowColumn(inputRow, inputColumn);
    showTableDiv.innerHTML = tableContent;  
});