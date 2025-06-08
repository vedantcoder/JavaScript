//speedcheck

function check(num){
    if(num<=70){
        return "ok speed";
    }
    else{
        let extra = num-70;
        let points = Math.floor(extra/5);
        if(points>=12){
            return points + " -- License Suspended";
        }
        else{
            return points;
        }
    }
}

console.log(check(70));
console.log(check(72));
console.log(check(80));
console.log(check(140));
