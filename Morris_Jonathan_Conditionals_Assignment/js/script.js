// Jonathan Morris
// SDI 1503
// Week 3 Conditional Assignment
//Add alert to test the file
//alert ("JavaScript works!");

var payYes = "Yes"; //Today is payday
var payNo = "No"; //It is not payday :(

var ask1 = prompt("Is it payday?\nYes or \nNo");
var ask2 = prompt("Do you want a new guitar today?\nYes or\nNo"); //Ask if you want to go buy a new guitar

if(ask1 == payYes){
    alert("It is Payday!/ Lets go buy your new guitar!");
    console.log("User says that it is payday, Lets go buy a guitar! "); //If answered Yes it is payday
}else if(ask1 == payNo){
    alert("Sorry, it does not look like you can buy a guitar today! ");//If answered No
    console.log("User says today is not Payday, No guitar for you today :( "); //Answered No it is not payday
}if(ask2 == payYes){
    alert("Sweet I am buying a new guitar!" );
}else if(ask2 == payNo){
    alert("Are you sure? ");
    console.log("Dude that sucks! ");
}