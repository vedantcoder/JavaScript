//getMax

const numbers = [1,2,3,4,5];

function getMax(array){
    // let max  = array[0];
    // for(let key of array){
    //     if(key>max){
    //         max = key;
    //     }
    // }
    // return max;

    //reduce method
    // return array.reduce((accumulator, current) => {
    //     if(current>=accumulator){
    //         accumulator = current;
    //     }
    //     return accumulator;
    // }, array[0]);

    //cleaner code
    return array.reduce((a, b) => (b>a) ?  b : a);
}

console.log(getMax(numbers));