//Sum of Arguments

function sum(...args){
    if(args.length ===1 && Array.isArray(args[0])){
        // let sum = 0;
        // for(let key of args[0]){
        //     sum+=key;
        // }
        // return sum;
        args = [...args[0]];
    }
    // let sum  = 0;
    // for(let key of args){
    //     sum += key;
    // }
    // return sum;
    return args.reduce((a,b)=>a+b);
}

console.log(sum([1,2,3,4,5]));