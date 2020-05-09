// Homework 1:

function convertMilesToKm(miles) {
    let result = miles * 1.6093;
    return result;
}
console.log(convertMilesToKm(100));


// Homework 2:

function foothballMatchWinner() {
    let teamA = prompt("scoreA: ");
    let teamB = prompt("scoreB: ");
    if (teamA > teamB || teamB > teamA) {
        console.log(`WINNER has beaten LOOSER by ${teamA}:${teamB}`);
    } else if (teamA == teamB) {
        console.log(`The match was a draw with a score of ${teamA}:${teamB}`);
    }
}

foothballMatchWinner();

// Homework 3:

function moneyWithdraw (enteredAmount, totalMoneyInATM, usersDailyLimit,pin) {
    let amountDifference = usersDailyLimit - enteredAmount;
    // let pin = prompt(`PIN: `);
    if (pin != 1234) {
        alert('Wrong PIN, please try again');
        return;
    }
    if(enteredAmount > totalMoneyInATM){
        alert(`ATM doesn't have enough funds`);
        return;
    }
    if(enteredAmount > usersDailyLimit) {
        alert(`Daily limit reached`);
        return;
    }
    if(pin == 1234 && enteredAmount < totalMoneyInATM && enteredAmount < usersDailyLimit){
        alert(`You have successfully taken out ${enteredAmount}, and you have ${amountDifference} left.`);
    }
         
}

moneyWithdraw(1000,5000,2000,1234);