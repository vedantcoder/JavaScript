//Moving an element

const numbers = [1,2,3,4,5];

function move(array, index, offset){
    let position = index + offset;
    if(position>array.length || position<0){
        console.error('Invalid offset');
        return;
    }
    let iterations = offset - index;
    let key=index;
    let temp;
    for(let i=0; i<iterations; i++){
        temp = array[key+1];
        array[key+1] = array[key];
        array[key] = temp;
        key++;
    }
    console.log(array);
}

move(numbers, 0, 2);