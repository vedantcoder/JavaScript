//Address object

let address = {
    street : 'Kharadi',
    city : 'Pune',
    zipCode : 411014,
}

function showAddress(address){
    for(let key in address){
        console.log(key + " - " + address[key]);
    }
}

showAddress(address);