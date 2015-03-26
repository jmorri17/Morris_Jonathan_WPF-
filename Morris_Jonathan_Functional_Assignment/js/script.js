//Jonathan Morris
//SDI 1503
//Week 4 Functional Assignment

//alert ("JavaScript works!");

//variables
var userInput =prompt("What game would you like to play? \n\n Florida Lottery or Powerball?"); //prompt for lottery type
var flLotto; //lotto variable
var pwrball; // powerball variable

function gameValidation {
    var timesClicked = 1;

    while (choice === "") {

        timesClicked++;

        if (timesCLicked === 10) { // if no entry is made after 10 clicks then user will receive a message to make a selection
            console.log("Please make a proper selection, Powerball or Fl Lotto?");
            break;  //ends loop after 10 clicks
        }
        return userInput
    }
userInput = gameValidation;

//Florida Lotto
function randomNumGen(min, max, num) {
    var newArray = []; //new array
    for (var i = 0; i < num; i++) { // loop for numbers generated

        var flLotto = Math.round(Math.random() * (max - min) + min);

    }
    return newArray;
}
flLotto = randomNumGen(1, 90, 5); // generate 5 numbers between 1 and 90




//main code

