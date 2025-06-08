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