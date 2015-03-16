//Jonathan Morris
//SDI Week 3 - Screencast Notes & Practice

//alert ("JavaScript works!");


// GROUP 1: Celsius to Fahrenheit converter

var userUnit = prompt("Please enter Temperature: \n C for Celsius \n F for Fahrenheit");
var degFahrenheit = "F";
var degCelsius = "C";

if(userUnit == degFahrenheit){
    console.log("Fahrenheit has been entered");
}

else if (userUnit == degCelsius){
    console.log("Celsius has been entered");
}
var tempAmountF = prompt("Please enter the Temperature amount that you would like to convert:");
var celCalc = 5 /9 * (tempAmountF - 32);
var tempAmountC = prompt("Please enter the Temperature amount that you would like to convert:");
if (userUnit == degFahrenheit){
    alert(tempAmountF + "degrees in Fahrenheit" + celCalc + " degrees Celsius.");
}
else if (userUnit == degCelsius)

var fahrenCalc = (9 / 5) * tempAmountC + 32;
{
    alert(tempAmountC + " degrees in Celsius" + fahrenCalc + "degrees Fahrenheith");
}

