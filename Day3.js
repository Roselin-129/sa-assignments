const numbers = [10, 20, 30, 40, 50];

function greet() {
    console.log("Welcome!");
}

greet();


const sum = numbers.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);


const num = numbers.find(n => n > 20);
console.log("Number:", num);

async function showNumber() {
    return 100;
}

showNumber().then(n => console.log("Async:", n));
