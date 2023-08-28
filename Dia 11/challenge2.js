let models = [];
let years = [];
let values = [];

let condition = true;
let index = 0;
while(condition){
    models[index] = prompt("Insert the vehicle's model");
    years[index] = parseInt(prompt("Insert the vehicle's year"));
    values[index] = Number(prompt("Insert the vehicle's values"));

    index++;

    let decision = prompt("Do you want to continue? (y/n)");
    if (decision.toUpperCase() !== "Y") {
        condition = false;
    }
}

for (let i = 0; i < models.length; i++) {
    console.log(`${models[i]}, ${years[i]} Valor: ${values[i]}`);
}

let maior;
for (let i = 0; i < values.length - 1; i++) {
    for (let j = 0; j < values.length - i - 1; j++) {
        if(values[j] > values[j+1]){
            let modelMoreValue = models[j];
            models[j] = models[j+1];
            models[j+1] = modelMoreValue;

            let yearMoreValue = years[j];
            years[j] = years[j+1];
            years[j+1] = yearMoreValue;

            let moreValue = values[j];
            values[j] = values[j+1];
            values[j+1] = moreValue;
        }
    }
}

console.table(models);
console.table(years);
console.table(values);