//1
let fibonacci = [];

for (let i = 0; i < 10; i++) {
    fibonacci[i] = parseInt(prompt("Insert the number in arrays"));
}

console.table(fibonacci);
let number = parseInt(prompt("Insert a number"));

for (let i = 0; i < fibonacci.length; i++) {
    if(fibonacci[i] === number){
        console.log(i);
    }
}
console.log("=================================");
//2
let numberQuantity = parseInt(prompt("Insert how many numbers do you want"));
let array2 = [];
let array2Inverted = [];

for (let i = 0; i < numberQuantity; i++) {
    array2[i] = parseInt(prompt("Insert a number"));
}
console.table(array2);

let lenghtArray2 = array2.length;

for (let i = 0; i < array2.length; i++) {
    array2Inverted[i] = array2[lenghtArray2 -= 1];
}
console.table(array2Inverted);