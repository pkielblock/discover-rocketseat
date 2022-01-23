let person = {
    name: 'Pedro',
    age: 19,
    weight: 85
}

for (let property in person) {
    console.log(property);
    console.log(person[property]);
}