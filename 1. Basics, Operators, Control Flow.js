//JavaScript
console.log("JAVASCRIPT BASICS!");

//We prefer having js in separate file for better code management
console.log('This is code from .js file')

//node index.js to run using node in terminal

let userName; //declaring a variable in js
console.log(userName);
//variable in 'undefined' by default

userName = "Vedant Nichal";
console.log(userName);

//Variables are case sensitive
//Camel notation used by convension

const num = 5; //declaring a constant, value cannot be changed
console.log(num);

/*Primitive Datatypes-
String
Number
Boolean
undefined
null
*/
//js is dynamic language - datatype of variable can be changed
/*Reference Datatypes-
Object
Array
Function
*/

//objects
let person = {
    firstName : "vedant",
    lastName : "Nichal",
    age : 18,
};        //object literal - array of pairs

//dot operator
console.log(person);
person.firstName = "Vedant";
console.log(person.firstName);

//bracket operator
person['firstName'] = "Anvit";
console.log(person['firstName']);

//dot is convinient but bracket is useful for dynamic selection
let selection = 'age';
console.log(person[selection]);

//Arrays
let colors = ['red', 'blue']; //array literal
colors[2] = 'green'; //length of array is dynamic!
//You can store different datatypes in same array
colors[3] = 5;
console.log(typeof colors); //an array is an object
console.log(colors);

//Functions
function greet(name){
    console.log("Msg from func..");
    console.log("Hey, " + name);
}
greet('Vedant');    //calling function

function sq(number){
    return number*number;
}
console.log(sq(2));

/*Operators
1. Arithmetic + - * / % **(power) ++ --
2. Assignment = += -= *= ...
3. Logical && || !
4. Relational > < >= <= == != === !==
5. Bitwise
6. Ternary (condition) ? (true) : (false)
=== strict equality so both type + value should be equal
*/

//logical 
/*Falsy(false) 
undefined
null
0
false
''
NaN
Truthy - anything not falsy
*/
let num1 = false || "Vedant" || 5; //returns first non falsy value
console.log(num1);

//Control flow
// if else same
// switch same as java and uses ===
//loops
//for loop same
//while same
//do...while same
//for...in loop (objects)
const person1 = {
    name : 'Vedant Nichal',
    age : 18,
    clg : 'BITS Pilani'
}
for(let key in person1){        //key is loop variable
    console.log(person1[key]);
}
//for..of loop (arrays)
let colors1 = ['red', 'blue', 'green']; 
for(let key1 of colors1){
    console.log(key1);
}
//NaN = Not a number, type = number!