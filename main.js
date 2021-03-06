// .----------------.  .----------------.  .----------------. 
// | .--------------. || .--------------. || .--------------. |
// | |  _______     | || |      __      | || |  ________    | |
// | | |_   __ \    | || |     /  \     | || | |_   ___ `.  | |
// | |   | |__) |   | || |    / /\ \    | || |   | |   `. \ | |
// | |   |  __ /    | || |   / ____ \   | || |   | |    | | | |
// | |  _| |  \ \_  | || | _/ /    \ \_ | || |  _| |___.' / | |
// | | |____| |___| | || ||____|  |____|| || | |________.'  | |
// | |              | || |              | || |              | |
// | '--------------' || '--------------' || '--------------' |
//  '----------------'  '----------------'  '----------------' 

function divisionOfChange() {
    var inputCharge = document.getElementById('amount-due').value;
    var inputTender = document.getElementById('amount-received').value;
    var change = (inputTender - inputCharge).toFixed(2);
    document.getElementById('output').innerHTML = change
    return change;
}

function calculateChange(){
    
    var dollars = Math.floor(divisionOfChange());
    change = (divisionOfChange() - dollars).toFixed(2) * 100;

    var quarters = Math.floor(change/25);
    change = change - (quarters * 25);

    var dimes = Math.floor(change/10);
    change = change - (dimes * 10);

    var nickels = Math.floor(change/5);
    change = change - (nickels * 5);

    var pennies = Math.floor(change/1);
   

    
    document.getElementById('dollars-output').innerHTML = dollars;
    document.getElementById('quarters-output').innerHTML = quarters;
    document.getElementById('dimes-output').innerHTML = dimes;
    document.getElementById('nickels-output').innerHTML = nickels;
    document.getElementById('pennies-output').innerHTML = pennies;
}