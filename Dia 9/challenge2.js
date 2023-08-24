let nameEmployee;
let age;
let salary;
let decision = true;
while (decision) {
    nameEmployee = prompt("Insert your name");
    age = parseInt(prompt("Insert your age"));
    salary = Number(prompt("Insert your salary"));

    let confirme = prompt(` Name: ${nameEmployee}
    AGE: ${age}
    Salary: ${salary}
    The information is correct (y/n)`);
    if(confirme === "y"){
        decision = false;
    }
}


let aumento = 0.015
let year = 2023
let newSalary = salary;

for (let i = 0; i < 10; i++) {
    console.log(`${year+i} - R$${newSalary.toFixed(2)}`);
    aumento *= 2;
    newSalary += (aumento*newSalary);
}