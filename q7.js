//object equality
//good task!!

function Address_(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
let newAddress1 = new Address_('Kharadi', 'Pune', 411014);
let newAddress2 = new Address_('Kharadi', 'Pune', 411014);
let newAddress3 = newAddress1;
let newAddress4 = new Address_('Viman Nagar', 'Pune', 411000);

function Details(name, std, city){
    this.name = name;
    this.std = std;
    this.city = city;
}
let details1 = new Details('Vedant', 2, 'Hyd');

function areEqual(address1, address2){      //check if 2 objects have same properties
    let flag = 0;
    for(let key in address1){
        for(let keyy in address2){
            if(key === keyy){
                flag += 1;
                break;
            }
        }
    }
    if(flag === Address_.length){
        console.log("Both have same properties");
    }
    else{
        console.log("Both don't have same properties");
    }
}
areEqual(newAddress1, newAddress2);

function haveEqualValues(address1, address2){      //check if 2 objects have same properties
    let flag = 0;
    for(let key in address1){
        for(let keyy in address2){
            if(key === keyy && address1[key] === address2[keyy]){
                flag += 1;
                break;
            }
        }
    }
    if(flag === Address_.length){
        console.log("Both have same properties & values");
    }
    else{
        console.log("Both don't have same values");
    }
}
haveEqualValues(newAddress1, newAddress2);
haveEqualValues(newAddress1, newAddress4);

function areSame(address1, address2){       //check if two objects are referencing the same object
    let flag1 = 0;
    if(address1===address2){
        flag1 = 1;
    }
    if(flag1===1){
        console.log("Pointing to the same object");
    }
    else{
        console.log("Pointing to different objects");
    }
}
areSame(newAddress1, newAddress2); //false
areSame(newAddress1, newAddress3); //true