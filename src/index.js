const readline = require('readline');
const { solution } = require('./solution');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the PIN: ', (pin) => {
    const combinations = solution(pin);
    console.log('Possible combinations:', combinations);
    rl.close();
});