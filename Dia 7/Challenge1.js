let qtd = 0;
let sum = 0;
let homens = 0;
let mulheres7 = 0;
let maiorHomens = 0;

let condiçao = true;
while(condiçao){
    let decisao = parseInt(prompt("1-Insert new student/2-logout"));
    if(decisao === 2){
        condiçao = false;
    }else if(decisao === 1){
        qtd++;
        let nota = parseFloat(prompt("Insert the grade"));
        sum += nota;
        let gender = prompt("m-Male/f-female");
        if(gender === "m"){
            homens++;
            if(nota > maiorHomens){
                maiorHomens = nota;
            }
        }else if(gender === "f" && nota > 7){
            mulheres7++;
        }
    }
}
let media = sum/qtd;

console.log("Media: " + media);
console.log("quantos homens: " + homens);
console.log("Mulheres com nota acima de 7: " + mulheres7);
console.log("Maior nota dos homens: " + maiorHomens);
