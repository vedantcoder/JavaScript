//Array from range

function arrayFromRange(min, max){
    let array =[];
    // length = max-min+1;
    // for(let i=0; i<length; i++){
    //     array[i] = min;
    //     min++;
    // } inefficient code
    for(i=min; i<=max; i++){
        array.push(i);
    }
    return array;
}

const numbers = arrayFromRange(4,7);

console.log(numbers);