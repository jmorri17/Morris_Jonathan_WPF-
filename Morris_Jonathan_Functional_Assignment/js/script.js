//Jonathan Morris
//SDI 1503
//Week 4 Functional Assignment

//alert ("JavaScript works!");

//variables
//var userInput;//prompt for lottery type
//var flLotto; //lotto variable
//var pwrBall; // powerball variable

//functions

function gameValidation () {
    var timesClicked = 1;
    var choice = prompt("What lottery type would you like to play?");
    while ((choice != "Florida") && (choice != "Powerball")) { //While variable choice is not equal to string Florida and variable not equal to string Powerball ask again
    choice = prompt("I'm sorry I did not get your selection, Please try again");

    }

    userInput = gameValidation;
    if(choice == "Florida"){

        var magicNumbers = randomNumGen(1,99,5);
        console.log ("Your Florida winning Lotto numbers are! " + magicNumbers.join(", "));
    } else if(choice == "Powerball"){

        var magicNumbers = randomNumGen(1,99,5);
        var powerBall = randomNumGen(1,99,1);
        console.log ("Your Powerball winning Lotto numbers are! " + magicNumbers.join(", ") + " Powerball is " + powerBall);
    }
}
//Florida Lotto Function
function randomNumGen(min, max, num) {

    var newArray = []; //new array

    for (var i = 0; i < num; i++) {

        RandomNumberPB = Math.round(Math.random() * (max - min) + min);

        newArray[i] = RandomNumberPB;
    }
    return newArray;
}

gameValidation();