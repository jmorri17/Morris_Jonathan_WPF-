//Jonathan Morris
//SDI 1503
//Week 4 Functional Assignment

//alert ("JavaScript works!");

//variables
var userInput =prompt("What game would you like to play? \n\n Florida Lottery or Powerball?"); //prompt for lottery type
var flLotto; //lotto variable
var pwrBall; // powerball variable

//functions

function gameValidation(choice) {
    var timesClicked = 1;

    while (choice === " ") {

        userInput = prompt("Do not leave this blank.\n\nPlease type in a selection:");

        timesClicked++;

        if (timesCLicked === 10) { // if no entry is made after 10 clicks then user will receive a message to make a selection

            console.log('Please make a proper selection, Powerball or Florida Lottery ?');

            break;  //ends loop after 10 clicks
        }
    }
    userInput = gameValidation;
}
//Florida Lotto Function
function randomNumGen(min, max, num) {

    var newArray = []; //new array

    for (var i = 0; i < num; i++) {

        var myRandomNumber = Math.round(Math.random() * (max - min) + min);

        newArray[i] = myRandomNumber;
    }
    return newArray;
}

// generate 5 numbers between 1 and 90
flLotto = randomNumGen(1, 90, 5); 

//Powerball Function

function randomNumGenPb(min, max, num) {
    var newArray1 = []; //new array

    for (var i = 0; i < num; i++) {

        var myRandomNumberPB = Math.round(Math.random() * (max - min) + min);

        newArray1[i] = myRandomNumberPB;
    }
    return newArray1;
}
// generate 6 numbers for powerball
pwrball = randomNumGen(1, 90, 6);

//main code
//output
console.log("You have chosen to play " +gameValidation()); //displays users lottery type choice

(gameValidation === "Florida") ? console.log("Florida lotto numbers are... " + flLotto+ ".") : console.log("The Powerball numbers are... " + pwrBall  + ".");

