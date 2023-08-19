let firstNumber = parseInt(prompt("Insert the first number"));
let secondNumber = parseInt(prompt("Insert the second number"));

let option = parseInt(prompt("1-soma/2-subtração/3-multiplicação/4-divisão"));

switch(option){
    case 1:
        console.log("soma");
        console.log(firstNumber + secondNumber);
        break;
    case 2:
        console.log("subtração");
        console.log(firstNumber - secondNumber);
        break;
    case 3:
        console.log("multiplicação");
        console.log(firstNumber * secondNumber);
        break;
    case 4:
        console.log("divisão");
        console.log(firstNumber / secondNumber);
        break;  
    default:
        console.log("operação inválida");
        break;              
}