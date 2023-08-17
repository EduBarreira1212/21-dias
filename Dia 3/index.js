let nameUser = prompt("Insert your name");
let age = parseInt(prompt("Insert your age"));
let height = parseFloat(prompt("Insert your height"));
let wheight = parseFloat(prompt("Insert your weight"));

let bornYear = 2023 - age;

let imc = wheight / (height*height);

console.log(`Hello ${nameUser}, you are ${age}, born in ${bornYear}, height: ${height}, weight ${wheight} and your IMC are ${imc.toFixed(2)} Kg/m2`);