function Calcular(num1, num2, operation) {
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "e":
            let potencia = 0;
            for (let i = 0; i < num2; i++) {
                potencia += (num1 * num1);
            }
            result = potencia;
            break;
        default:
            result = "Operation unavailable"
            break;
    }
    return result;
}

let number1 = parseInt(prompt("Insert the number 1"));
let number2 = parseInt(prompt("Insert the number 2"));
let operation = prompt("Insert the operation: +/-/*/ / / e-Potentiation");

console.log(Calcular(number1, number2, operation));