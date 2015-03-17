// Jonathan Morris
// SDI 1503
// Week 3 Conditional Assignment
//Add alert to test the file
//alert ("JavaScript works!");


//Buying a Guitar/Les Paul

var savings = 1500;//this variable holds the value of how much i have in my savings account
var LP = 3000;//this variable is how much the Les Paul costs
var payCheck =1600;//this variable is my avg. paycheck amount
var getPaid = friday;//this variable is when it is payday
var friday = false;//this variable holds the value of whether it is friday or not

//if today is payday and if i get paid 1600 dollars i can buy the guitar, if not i have to wait

if(getPaid == true && payCheck >= 1600) /*if today is payday, and if my check is greater than or equal to 1600*/{
    console.log("Lets go buy a Les Paul!");//if the above conditions correct print Lets go buy a Les Paul"
}else if(friday = true || payCheck < 1600)/*If today is friday, then it is payday or if my paycheck is less than 1600*/{
    console.log("Looks like you have to wait a bit longer");//if the above conditions are met, print "Looks like you have to wait a bit longer"
}else{
    console.log("Sorry Dude! You can't buy a guitar today");//if both conditions are not met or true, print "Sorry Dude! You can't buy a guitar today"
}