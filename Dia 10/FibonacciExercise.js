let number = parseInt(prompt("Insert a number"));
let fibonacci = [];

fibonacci[0] = number-1;
fibonacci[1] = number;

for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
}
console.table(fibonacci);