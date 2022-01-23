let string = '123';
console.log(Number(string));

let number = 321;
console.log(String(number));
console.log(String(number).length);

let word = 'Paralelepipedo';
console.log(word.length);

let bigNumber = 138.980;
console.log(bigNumber.toFixed(2).replace('.', ','));

let phrase = 'Archive 81 End Sucks';
console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());

let array = phrase.split(' ');
console.log(array);

let phraseUnderscore = array.join('_');
console.log(phraseUnderscore);

console.log(phrase.includes('Sucks'));