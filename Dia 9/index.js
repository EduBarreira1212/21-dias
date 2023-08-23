
let condition = true
do {
    let nameUser = prompt("Insert your name");
    let age = parseInt(prompt("Insert your age"));
    let weight = parseFloat(prompt("Insert your weight"));
    let height = parseFloat(prompt("Insert your height"));
    let profession = prompt("Insert your profession");

    console.log(`Hi ${nameUser}, you're ${age} years old, are ${profession}, 
    has ${height} of height and your weight is ${weight}kg`);


    if (age >= 18) {
        console.log("you can drink");
    } else {
        console.log("You can't drink");
    }

    //Age in months,days and weeks
    let months = age * 12;
    let weeks = age * 52;
    let days = age * 365;

    console.log("Your age in months are: " + months);
    console.log("Your age in weeks are: " + weeks);
    console.log("Your age in days are: " + days);



    //IMC
    let imc = (weight / (height * height)).toFixed(2);

    if (imc < 18.5) {
        console.log("Skinny");
    } else if (imc < 24.9) {
        console.log("Normal IMC");
    } else if (imc < 30) {
        console.log("Overweight");
    } else if (imc > 30) {
        console.log("Obesity");
    }


    //year of birth
    let birthYear = 2023 - age;
    console.log("You born in: " + birthYear);

    for (let i = 0; i <= age; i++) {
        console.log(`${birthYear} - ${i} years old`);
        birthYear++;
    }

    let condition = parseInt(prompt("1-Insert new data/2-close program"))
}while (condition === 1);