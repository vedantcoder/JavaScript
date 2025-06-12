//Area of circle

let circle = {
    radius : 2,
    get area(){
        return this.radius*this.radius*Math.PI;
    },
}

console.log(circle.area);
circle.radius = 10;
console.log(circle.area);