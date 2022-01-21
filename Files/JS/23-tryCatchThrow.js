function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Empty Name');
    }
    
    console.log(name);

}

try {
    sayMyName('');
} catch (error) {
    console.log(error);
}

console.log('After Try/Catch');