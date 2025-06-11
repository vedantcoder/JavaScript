//Arrays in js

//adding elements
const numbers = [3, 4]; //constant does not stop us from modifying the contents of an array
console.log(numbers);

//arrays are object

//adding at the end
numbers.push(5,6);
console.log(numbers);

//adding at the start
numbers.unshift(1,2);
console.log(numbers);

//adding in the middle
numbers.splice(2, 0, 0); //splice takes start index, delete count(later), and values to add as argument
console.log(numbers);

//finding elements
//primitives
console.log(numbers.indexOf(0));    //returns index of element
// it takes an optional second argument to indicate starting index for searching
console.log(numbers.indexOf('a'));    //returns -1 for element not existing
/// === used for comparing
console.log(numbers.includes(5));  //check if a value is there in an array returns true/false

//objects
const courses = [
    {   id : 1, name : "Course 1",},
    {   id : 2, name : "Course 2",}
];
//includes will not help
//we use array.find() methon which needs a function as an argument
console.log(courses.find(function(course){
    return course.name == "Course 1";
}));
console.log(courses.findIndex(function(course){
    return course.name == "Course 1";
}));
console.log(courses.find(function(course){
    return course.name == "xyz";
}));

//arrow functions
//we can write the same above function in a cleaner way
console.log(courses.find(course => course.name =="Course 1"));

//removing elements
const num = [1,2,3,4,5];
console.log();
console.log(num);

//removing from the end
num.pop();
console.log(num);

//removing from the start
num.shift();
console.log(num);

//removing from the middle
num.splice(1, 1);   //splice now takes starting index and num of elements to be removed from the array
console.log(num);

//emptying an array
let nums = [1,2,3,4,5];
let another = nums;
//nums and another both point to same object [1,2,3,4,5]
console.log();
//now we empty nums array, another will still remain as it is
nums = [];
console.log(nums);
console.log(another);
//as we can see from putput nums now points to an empty object but another still points to the previous object 
//so this method only works when you dont have multiple references to the same object in our code (no 'another')

//for multiple references
let nums_ = [1,2,3,4,5];
let another_ = nums_;
nums_.length = 0;
console.log(nums_);
console.log(another_);

//another solution
let nums__ = [1,2,3,4,5];
let another__ = nums__;
nums__.splice(0, nums__.length);
console.log(nums__);
console.log(another__);

//another solution
let nums___ = [1,2,3,4,5];
let another___ = nums__;
while(nums___.length > 0){
    nums___.pop();              //removing last element in loop, not recommended(performance cost)
}
console.log(nums__);
console.log(another__);

//combining and slicing arrays
const first = [1,2,3,4,5];
const second = [6,7,8,9,0];
console.log();

let combined  = first.concat(second);
console.log(combined);

let spliced = combined.slice(3, 8);       //indicate starting and ending index to splice
console.log(spliced);

//objects are copied by reference

//spread operator
const combined_ = [...first, ...second];
console.log(combined_);

//iterating an array
///for..of loop
for(let key in combined){
    console.log(combined[key]);
}

//forEach
combined.forEach(number => console.log(number));

//joining arrays
const join = combined.join(','); //returns a string containing values from the array separated by the separator in argument
console.log(join);

//split
let msg = "My name is Vedant";
let split = msg.split(" "); //splits a string whenever the argument is enountered
console.log(split);

//sorting arrays
let unsorted = [5,8,2,4,7];
let sort = unsorted.sort();
console.log(sort);

//reversing
let reverse = sort.reverse();
console.log(reverse);

//sorting arrays with objects
const course = [
    {id : 1, name : "b"},
    {id : 2, name : "a"},
];
//sort by name
let sort_course = course.sort(
    (a,b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    }
);
console.log(sort_course);       //compares using ascii values!

//testing the elements of an array
let test = [1,2,3,4,5];
let result = test.every(value => value > 0);   //pass a test as argument
console.log(result);
//similarly we have array.some() where we pass a test and it returns true as soon as it encounters an element satisfying
//the test condition

//filtering an array (based on some criteria)
let filter = test.filter(number => number >2);
console.log(filter);

//mapping an array
let map = filter.map(number => '<li>' + number + '</li>');
let html = '<ul>' + map.join('') + '</ul>';      //by default , is used as the separator
console.log(html);

//mapping to object
let map_ = filter.map(number => {
    return {
        value : number,
    };
});
console.log(map_);

//reducing an array
let toReduce = [1,2,3,4,5];
let sum = 0;
for(let n of toReduce){
    sum += n;
}
console.log(sum);

let reduced = toReduce.reduce((accumulator, current) => accumulator + current, 0);
console.log(reduced);
//this reduce function does the same thing as above