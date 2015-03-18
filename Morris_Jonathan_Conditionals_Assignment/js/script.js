// Jonathan Morris
// SDI 1503
// Week 3 Conditional Assignment
//Add alert to test the file
//alert ("JavaScript works!");

//variables
var payYes = "Yes"; //Today is payday
var payNo = "No"; //It is not payday :(
var ask = prompt("Do you want a new guitar today?\nYes or\nNo"); //Ask if you want to go buy a new guitar

//Conditionals else if and output

if(ask == payYes){
    alert("It is Payday!/ Lets go buy your new guitar!")
    console.log("User says that it is payday, Lets go buy a guitar! "); //If answered Yes it is payday
}else if(ask == payNo){
    alert("Sorry, it does not look like you can buy a guitar today! ")
    console.log("User says today is not Payday, No guitar for you today :( "); //Answered No it is not payday
}if(ask == payYes){
    var whatKind = prompt("Are you going to buy a Les Paul? ");
}else if(ask == payNo){
    console.log("Dude that sucks! ");
}