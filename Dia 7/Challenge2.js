let sum = 0;
let qtt = 0;
let maiorValor = 0;
let saldo = 0;
let decision = true;

let name = prompt("Insert your name");
let cpf = parseInt(prompt("Insert your cpf"));

do {
    let option = parseInt(prompt("1-deseja inserir/2-parar"));
    if (option == 1) {
        let valor = parseFloat(prompt("Insert a value"));
        qtt++;
        sum+=valor;

        if (maiorValor < valor) {
            maiorValor = valor;
        }

        if (valor < 0) {
            console.log("NO, value is negative");
        }else{
            let operation = prompt("s-Saque/d-depósito");

            if (operation === "d") {
                saldo += valor;
            } else if (operation === "s") {

                if (saldo < valor) {
                    console.log("NO, saldo's smaller than valor");
                }else{
                    saldo-=valor;
                }
                
            }

        }
    } else if (option === 2) {
        decision = false;
    }

} while (decision);

let media = sum/qtt;

console.log("Saldo: " + saldo);
console.log("Maior valur: " + maiorValor);
console.log("Media: " + media.toFixed(2));