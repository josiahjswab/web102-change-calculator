
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
function clickEventHandler(){
    var charge = parseInt(document.getElementById('amount-due').value);
    var tender = parseInt(document.getElementById('amount-received').value);
    var change = (tender-charge).toFixed(2);
    document.getElementById('output').innerText = change;//this will not be in final product.
}

