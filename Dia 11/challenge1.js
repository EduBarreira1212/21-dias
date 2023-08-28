let names = [];
let grades = [];
let sum = 0;

let condition = true
let index = 0;

while (condition) {
    names[index] = prompt("Insert the student's name");
    grades[index] = parseFloat(prompt("Insert the student's grade"));
    sum += grades[index];

    index++;

    let decision = prompt("Do you want to continue? (y/n)");
    if (decision.toUpperCase() !== "Y") {
        condition = false;
    }
}

for (let i = 0; i < names.length; i++) {
    console.log(`Student: ${names[i]} Grade: ${grades[i]}`);
}

let media = (sum/names.length);

console.log("Sum = " + sum);
console.log("Media = " + media.toFixed(2));