function clickEventHandler(){

    //variable assigns value of amount due
    var amountDue = document.getElementById('amount-due').value;
    //variable assigns value of amount received
    var amountReceived = document.getElementById('amount-received').value;
    //variable that grabs calculated amount and assigns value of new amount
    var dollars = Math.floor(calculateChange());
    var remainder = ((calculateChange() - dollars).toFixed(2)) * 100;
    var quarters = Math.floor(remainder/25);
    remainder -= (quarters * 25);
    var dimes = Math.floor(remainder/10);
    remainder -= (dimes * 10);
    var nickels = Math.floor(remainder/5);
    remainder -= (nickels * 5);
    var pennies = Math.floor(remainder/1);

    //variable posts amount to the dollars-output id
    var dollarOutput = document.getElementById("dollars-output").innerHTML = (dollars);
    var quartersOutput = document.getElementById("quarters-output").innerHTML = (quarters);
    var dimesOutput = document.getElementById("dimes-output").innerHTML = (dimes);
    var nickelsOutput = document.getElementById("nickels-output").innerHTML = (nickels);
    var penniesOutput = document.getElementById("pennies-output").innerHTML = (pennies);
    
}

function calculateChange(due, received){
    var amountDue = document.getElementById('amount-due').value;
    var amountReceived = document.getElementById('amount-received').value;
    var change = (amountReceived - amountDue).toFixed(2);
    return change;
}

document.getElementById('calculate-change').onclick = function() {
    clickEventHandler();
}