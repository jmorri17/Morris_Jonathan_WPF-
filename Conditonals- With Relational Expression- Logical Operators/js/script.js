//Conditionals with Relationa Expressions - Logical Operators - Screencast
//Tenary Operators

var gpa = 48;

//if gpa is over the min 2.0 score, the student can graduate
if(gpa > 2.0 ){
    console.log("You can graduate!");

}else{
    console.log("GPA is too low!");
}*/

(gpa > 2.0)?console.log("You can graduate!") : console.log("GPA is too low!");

//Conditionals Logic - Ternary Operators

var age = 6;
var book;

//if the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
book = (age <10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);
