//except

const numbers = [1,2,3,4,5];

function exclude(array, exclude){
    for(let key in array){
        for(let key_ in exclude){
            if(array[key]===exclude[key_]){
                array.splice(key,1);
            }
        }
    }
    return array;
}

console.log(exclude(numbers, [2,5]));