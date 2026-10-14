const fruits = [
    { name: "Apple", price: 100, quantity: 2 },
    { name: "Banana", price: 40, quantity: 5 },
    { name: "Mango", price: 80, quantity: 3 },
    { name: "Orange", price: 90, quantity: 4}
];

function greet(){
    console.log("Welcome to fruit shop!");
}

greet();

 const result = fruits
 .filter(fruit => fruit.price > 60)
 .sort((a, b) => a.price - b.price)
 .map(fruit => fruit.name)
 .slice(0,2);
 

 console.log(result);
 
const foundFruit = fruits.find(fruit => fruit.name === "Mango");

console.log("Found fruit:", foundFruit);