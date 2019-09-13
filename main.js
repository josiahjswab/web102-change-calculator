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
function clickEventHandler() {
    var charge = document.getElementById('amount-due').value;
    var tender = document.getElementById('amount-received').value;
    var change = (tender - charge).toFixed(2);
    return change;
}

function calculateChange() {

    var dollars = Math.floor(clickEventHandler());
    change = (clickEventHandler() - dollars).toFixed(2) * 100;
    var change = change * 1.00;
    
    var quarters = Math.floor(change/25);
    change -= (quarters * 25);

    var dimes = Math.floor(change/10);
    change -= (dimes * 10)

    var nickels = Math.floor(change/5);
    change -= (nickels * 5);

    var pennies = Math.floor(change/1);


    document.getElementById('dollars-output').innerHTML = 'Dollars:' + dollars;
    document.getElementById('quarters-output').innerHTML = 'Quarters' + quarters;
    document.getElementById('dimes-output').innerHTML = 'Dimes:' + dimes;
    document.getElementById('nickels-output').innerHTML = 'Nickels:' + nickels;
    document.getElementById('pennies-output').innerHTML = 'Pennies:' + pennies;
}