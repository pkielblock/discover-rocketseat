// Criando Array Com Construtor

let array = new Array('a', 'b', 'c');
console.log(array);
console.log(array.length);

// jogando as letras de uma palavra dentro de um array
let word = 'manipulation';
console.log(Array.from(word));


////
let techs = ['html', 'css', 'js'];
//adicionar elementos no final do array
console.log(techs.push('nodejs'));
//adicionar elementos no começo do array
console.log(techs.unshift('sql'));
//remover do final
techs.pop();
//remover do começo
techs.shift();
//pegar elementos do array
console.log(techs.slice(1, 3));
//remover um item de qualquer posição
techs.splice(2, 1);
//encontrar posição de um elemento
let index = techs.indexOf('css');
console.log(index);
///
console.log(techs);