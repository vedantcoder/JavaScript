//Count occurences

const numbers = [1,2,3,4,5,1,2,1,2,1];

function count(array, element){
    // let count=0;
    // for(let key of array){
    //     if(key===element){
    //         count++;
    //     }
    // }
    // return count;

    //using reduce method
    return array.reduce((accumulator, current) => {
        if(current === element){
            accumulator++;
        }
        return accumulator;
    }, 0);
}

console.log(count(numbers, 1));