//Error Handling

//Count occurences

const numbers = [1,2,3,4,5,1,2,1,2,1];

function count(array, element){
    if(!Array.isArray(array))
        throw new Error('Pass an array')
    
    return array.reduce((accumulator, current) => {
        if(current === element){
            accumulator++;
        }
        return accumulator;
    }, 0);
}

try{
console.log(count(true, 1));
}
catch(e){
    console.log(e);
}