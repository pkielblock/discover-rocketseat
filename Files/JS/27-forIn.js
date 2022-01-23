let person = {
    name: 'Pedro',
    age: 19,
    weight: 84
}

for (let property in person) {
    console.log(property);
    console.log(person[property]);
}