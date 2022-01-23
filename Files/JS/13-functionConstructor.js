// Constructor Function
// Boa pratica colocar a primeira letra maiuscula

function Person(name){
    this.name = name
    this.walk = () => {
        return this.name + ' is walking';
    }
}

const pedro = new Person('Pedro');
const henrique  = new Person('Henrique');

console.log(pedro.walk());
console.log(henrique.walk());
