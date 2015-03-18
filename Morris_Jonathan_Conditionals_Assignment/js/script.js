// Jonathan Morris
// SDI 1503
// Week 3 Conditional Assignment
//Add alert to test the file
//alert ("JavaScript works!");


//Buying a Guitar/Les Paul

var savings = 1500;//this variable holds the value of how much i have in my savings account
var LPcost = 3000;//this variable is how much the Les Paul costs
var payCheck = prompt("Is your paycheck 1600 or more?\nYes or \nNo");//this variable will ask if your paycheck amount is the avg amount
var friday =  prompt("Is it Friday?\nYes or\nNo");//this variable will ask if it is friday or not
var getPaid = friday;//this variable is when it is payday

//if today is payday and if i get paid 1600 dollars i can buy the guitar, if not i have to wait

if(getPaid == false && payCheck >= 1600) /*if today is payday, and if my check is greater than or equal to 1600*/{
    console.log("Lets go buy a Les Paul!");//if the above conditions correct print Lets go buy a Les Paul"
}else if (!(friday = true || payCheck < 1600)) {
    console.log("Sorry Dude! You can't buy a guitar today");//if both conditions are met or true, print "Sorry Dude! You can't buy a guitar today"
} else {
    console.log("Lets go buy a Les Paul!!");//if the above conditions are not met, print "Looks like you have to wait a bit longer"
}

//outputs
console.log("My savings account balance is " + savings ,".");
console.log("The Les Paul I want cost " + LPcost + ".");
console.log("Is it Friday?" + friday);
console.log("My paycheck amount is " + payCheck);


//Scraping this cannot get it to calculate correctly, back to the drawing board.