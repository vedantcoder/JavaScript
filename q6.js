//Factory & Constructor

function address(street, city, zipCode){             //factory
    return{
        street,
        city,
        zipCode
    };
}
let newAddress = address('Kharadi', 'Pune', 411014);
console.log(newAddress);

function Address_(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
let newAddress_ = new Address_('Kharadi', 'Pune', 411014);
console.log(newAddress_);