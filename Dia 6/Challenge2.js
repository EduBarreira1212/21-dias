let number = parseInt(prompt("Insert a number positive and integer"));

for (let i = number; i <= number + 2; i++) {
    console.log("Multiplication table " + i);
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i*j}`);
    }
}