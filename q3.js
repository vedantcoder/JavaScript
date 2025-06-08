//fizzbuzz

function FizzBuzz(num){
    let msg = "";
    if(typeof num != "number"){
        //msg+="Not a number";
        return NaN;
    }
    if(num%3==0){
        msg+="Fizz";
    }
    if(num%5==0){
        msg+="Buzz";
    }
    return msg === "" ? num : msg;
}

console.log(FizzBuzz(3));
console.log(FizzBuzz(5));
console.log(FizzBuzz(15));
console.log(FizzBuzz(1));
console.log(FizzBuzz('Vedant'));

//NaN = Not a number, type = number!