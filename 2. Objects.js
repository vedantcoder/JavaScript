//Objects in js

const circle = {        //object (object literal syntax)
    radius: 1,          
    location : {
        x : 1,
        y : 1
    },
    isVisible : true,
    draw : function(){
        console.log('circle');
    }
};

circle.draw; //Method
console.log(circle);

//Here we have defined an object circle with first pair being radius and the corresponding value & location mapping to another 
//object contaning a pair x with its value & y with its value. we also have iSvisible with true/false

//Factory functions
function createCircle(radius){
    return {
        radius,          //is same as radius : radius
        draw(){
            console.log("circle");
        }
    };
}
//in factory function we return an object from a function

const circle1 = createCircle(1);
console.log(circle1);
console.log(circle1.draw());

//Constructor Function
function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log('draw');
    }
}
//we use this keyword to return object

const circle_ = new Circle(1);
console.log(circle_);
//new creates an empty object like const x={}; makes it point to Circle function and then object is returned

//objects are dynamic you can add to it easily
circle.color = 'blue';
delete circle.isVisible;
console.log(circle);

//functions are objects!

Circle.call({}, 1); //same as const circle_ = new Circle(1);
Circle.apply({}, [1]); //arguments passed as array

//Valve vs reference
let a = 10;
let b = a;
a = 20; 
//a=20, b=10
console.log();
console.log(a);
console.log(b);

let x = {value : 10};   //here the object is stored in a separate space in storeage and only the address of that space is stored in x
let y = x;      //y=x so y is also pointing to the same address where the object is stored (same as x)
x.value = 20;   //changes the value property of object and since x y both point to same object x.value=y.value=20
console.log();
console.log(x.value);
console.log(y.value);

//so primities are copied by value, objects are copied by reference!

//an object is not iterateable
//we can use for...in but not for...of

for(let key in circle){
    console.log(key + "-" + circle[key]);
}

//modified for...of for interating through an object
for(let key of Object.keys(circle)){
    console.log(key," - " ,circle[key]);
}

for(let entry of Object.entries(circle)){
    console.log(entry);
}

if('radius' in circle){     //check for an entry in object
    console.log("yes");
}

//how to copy objects - old
const another = {};
for(let key in circle){
    another[key] = circle[key];
}
console.log(another);

//new equivalent method
const another_ = Object.assign({}, circle); //the first argument need not be empty, you can have some elements in it too
console.log(another_);

//spread operator
const another__ = {...circle};  //... is the spread operator to clone an object
console.log(another__);

//Garbage Collection - no memory allocation hassle as garbage collector does it automatically!

//Math object
let num = Math.PI;    //assigns pi value to x
//use mozilla documentation for any mathematical calculation, all math object functions are listed
let num1 = Math.random(); //a random no b/w 0 to 1 is assigned to y
console.log(num1);

//String object
const msg = 'Hi';   //string primitive
const msg1 = new String("Hi"); //string object
//but when we use dot operator with primitive string variable it is automatically wrapped into a string object and hence we can use all methods
//associated with the string object
//again mozilla documentation has a list of all methods of the String() object.

//Template literals - indicated by ``
const mymsg = 
'This is my\n' +
'\'first\' message';    //this is ugly code
console.log(mymsg);

const mymsg_ = 
`This is my
'first' message`;       //clean code!
console.log(mymsg_);
const username = "Vedant";
const newmsg = `My name is ${username}.`;   //placeholder ${___ }
console.log(newmsg);

//Date object
const now = new Date();
console.log(now);
const date1 = new Date('May 11 2018 09:00');
console.log(date1);
const date2 = new Date(2018, 4, 11, 9, 0); //0 based month indexing
console.log(date2);
//get and set mothods available in date object
//refer to mozilla documentation for other functions
//convert to string etc useful in apps