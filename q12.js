//Includes

const numbers  = [1,2,3,4,5];

function include(array, number){
    for(let element of array){
        if(element===number){
            return true;
        }
    }
    return false;
}

console.log(include(numbers, 5));