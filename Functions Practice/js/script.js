//Jonathan Morris
//SDI 1503

//Week 4 Functions practice and Go to session

//variables
var myName = prompt("Enter your name please:");
var myRandom;

//functions
function nameValidation(firstName) {

    var timesClicked = 1;

    while  (firstName === "") {

        firstName = prompt("Do not leave this blank.\n\nPlease enter your first name:");

        timesClicked++;

        if (timesCLicked=== 10) {
               console.log("Enough I do not have time to play today!");
                break;
        }


    }
    return firstName;
}

function randomNumGen(min, max, num) {

    var randomArray = [];

    //Math.random() * (max - min) + min
    for (var i = 0; i < num; i++) {

        var myRandomNumber = Math.round(Math.random() * (max - min) + min);

        randomArray[i] = myRandomNumber;
    }

    return randomArray;
}
//main code
//myName = nameValidation(myName);
//console.log("Hello, " + myName + " . Welcome!");

myRandom = randomNumGen(10, 100, 5);
console.log
myRandom = randomNumGen(50, 1000, 10);