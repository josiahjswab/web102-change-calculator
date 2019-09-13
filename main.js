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
    document.getElementById('output').innerText = change; //this will not be in final product.
    return change;
}

function calculateChange() {

    var dollars = Math.floor(clickEventHandler());
    var change = change%1.00;
    var quarters = Math.floor(change/.25);
    var change = change%.25;
    var dimes = Math.floor(change/.10);
    var change = change%.10;
    var nickels = Math.floor(change/.05);
    var change = change%.05;
    var pennies = Math.floor(change/.01);
    var change = change*100;

    document.getElementById('dollars-output').innerHTML = 'Dollars:' + dollars;
    document.getElementById('quarters-output').innerHTML = quarters;
    document.getElementById('dimes-output').innerHTML = 'Dimes:' + dimes;
    document.getElementById('nickels-output').innerHTML = 'Nickels:' + nickels;
    document.getElementById('pennies-output').innertext = 'Pennies:' + pennies;


}