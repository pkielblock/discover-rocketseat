// Hoisting - ELEVAÇÃO
// O var é global, então se aplica o conceito de hoisting, o javascript
// retira o var do scope e deixa como global.
// Por isso o resultado 'undefined', a variavel existe globalmente
// porém ainda não tem um valor atribuido a ela na hora do console.log


console.log('Existe X antes do Bloco? ', x);

{
    var x = 19;
}

console.log('Existe X depois do Bloco? ', x);