//Functions
console.log("FUNCTIONS!");

//Function Declaration - this function can be called before it is even declared!
function walk(){
    console.log('walk');
}
walk();

//Function expression (anonyamous) - this cannot be called before declaration since it is a variable
let run  = function/*(name)*/(){
    console.log('run')
};      //semicolon needed
run();  //function calling remains the same

let move = run;         //both variables are referencing to the same function
move();

//hoisting - moving function declaration to the top of the file

//variable arguments
function sum(){
    console.log(arguments);     //arguments is an object that stored all arguments passed index:value format
    //so we can extract all agrements passed from this object and use in out function
    let total = 0;
    for(let key of arguments){
        total += key;
    }
    return total;
}
console.log(sum(1,2,3,4,5));

//The rest operator for varying no of arguments
function sum_(...args){
    console.log(args);      //you get the arguments in an array!
    let total = 0;
    for(let key of args){
        total += key;
    }
    return total;
}
console.log(sum_(1,2,3,4));
//rest parameter must be the last formal parameter

//default parameters
function interest(principal, rate=3.5, years=5){
    // rate = rate || 3.5;     //if rate not passed 3.5 is default
    // years = years || 5;
    return principal*rate/100*years;
}
console.log(interest(10000));

//getters and setters
const person = {
    firstName : "Vedant",
    lastName : "Nichal",
    // fullName : function(){}
    get fullName(){             //getter method
        return`${person.firstName} ${person.lastName}`;
    },
    set fullName(value){        //must have an argument
        if(typeof value !== 'string'){
            throw new Error('Argument is not a string!');       //here we are throwing an exception, we now need to catch it
        }
        const split = value.split(' ');
        if(split.length!==2){
            throw new Error('Enter first & last name!');
        }
        this.firstName = split[0];
        this.lastName = split[1];
    }
}
// console.log(person.firstName + " " + person.lastName);
//OR
//since the above 2 statements are time taking to implement multiple times we define them once in the object itself
//getters => access properties
//setters => change them 
console.log(person.fullName);

try{
    person.fullName = 'Anvit Nichal';
}
catch(e){               //catching the error
    console.log(e);
    // alert(e);
}
console.log(person);

//Error handling
//what if we pass something other than string in setter method of fullName?
//so we do error handling at the beginning for the function (defensive programming)

//scope
//by default a variable is accesible only inside its respective code block (loop/conditional/etc)
//if it does not beling to a code block it has global scope
//local variables take precedence over global ones

//let vs var
//when you declare a variable using var keyword its scope is not limited to its code block, 
// it is accessible in the entire function
// var when declared in global scope attaches the property to window object while let doesnt (undesireable)

//this keyword
//the object that is executing the current function
const video = {
    title : 'a',
    tags : ['a', 'b', 'c'],
    play(){
        console.log(this);      //this references to the object video
    },
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);          //here this will reference to the global object since it is within a function
                                            //if you use => instead then it will reference to video object!
        }, this);     //you can pass a second argument in the forEach function, an object with 'this' will reference to
    }
}
video.play();
video.showTags();

function Video(title){
    this.title = title;
    console.log(this);      //this references to the global object in node and window object in chrome
}
const v = new Video('Video');       //instead of the global object we get a different object (not even the video object)
//new creates an empty object and this references to the new {} created by new

//Changing this
//another way to use this in function above without passing a second argument

const video_ = {
    title : 'a',
    tags : ['a', 'b', 'c'],
    play(){
        console.log(this);      //this references to the object video
    },
    showTags(){
        const that  = this;     //at this point this is refering to video object as so will that
        this.tags.forEach(function(tag){
            console.log(that.title,tag);
        });
    }
}
video_.showTags();

function playVideo(){
    console.log(this);
}
playVideo.call({name: "Vedant"});       //we pass an object which 'this' will reference to
playVideo.apply({name: "Vedant"});
playVideo.bind({name: "Vedant"})();      //bind creates a new function

//so in the previous object instead of using 'that' we can just use this and then do a .bind(this) to the function declaration
const video__ = {
    title : 'a',
    tags : ['a', 'b', 'c'],
    play(){
        console.log(this);      //this references to the object video
    },
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        }.bind(this));
    }
}
video__.showTags();

//best solution is using => as arrow function inherits this