// Write your JavaScript here
var dollars,
    quarters,
    dimes,
    nickels,
    pennies;
    // interesting he is delearing these as varriables here but defining them below
    
    function CalculateChange(amountDue, amountReceived){

    change= amountReceived-amountDue;
    if (change==0){
        console.log("exact change, thanks!")
    
    }
    if(change<=-1){
        console.log("Hey, you owe "+change+" more than this");
    }
    else console.log("Your change is: " + parseFloat(change).toFixed(2));

    dollars=Math.floor(change/1.00);
    var change=change%1.00;
    quarters=Math.floor(change/.25);
    var change=change%.25;
    dimes=Math.floor(change/.10);
    var change=change%.10;
    nickels=Math.floor(change/.05);
    var change=change%.05;
    pennies=(change*100).toFixed(0);
    // from my understanding the change=change% is changing the change variables definition as you go down the list.
    // I added the var before change=change% and nothing has changed for functionality in the browser so I imagine the var tag isn't event necessary.


}

function clickEventHandler(e){
    amountDue=document.getElementById('amount-due').value;
    amountReceived=document.getElementById('amount-received').value;
    parseFloat(Math.round((amountDue)*100)/100).toFixed(2);
    parseFloat(Math.round((amountReceived)*100)/100).toFixed(2);
    result= CalculateChange(amountDue, amountReceived);
   /* document.getElementById('pennies-output').innerHTML= "pennies: " + pennies;
    document.getElementById('nickels-output').innerHTML= "nickels: " + nickels;
    document.getElementById('dimes-output').innerHTML= "dimes: " + dimes;
    document.getElementById('quarters-output').innerHTML= "quarters: " + quarters;
    document.getElementById('dollars-output').innerHTML= "Dollars: " + dollars;
    */
   document.getElementById('pennies-output').innerHTML= pennies;
   document.getElementById('nickels-output').innerHTML= nickels;
   document.getElementById('dimes-output').innerHTML= dimes;
   document.getElementById('quarters-output').innerHTML= quarters;
   document.getElementById('dollars-output').innerHTML= dollars;
}
    
;