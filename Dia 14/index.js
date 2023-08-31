function askName() {
    let nameEmployee = prompt("What's your name?");
    let salary = parseFloat(prompt("What's your salary?"));
    salaryIncrease(nameEmployee, salary);
}

function salaryIncrease(name, salary) {
    let porcent = 0;
    let newSalary = 0;
    if(salary <= 1500){
        newSalary = salary + (salary*0.20);
        porcent = 20;
    }else if(salary <= 2000){
        newSalary = salary + (salary*0.15);
        porcent = 15;
    }else if(salary <= 3000){
        newSalary = salary + (salary*0.10);
        porcent = 10;
    }else if(salary > 3000){
        newSalary = salary + (salary*0.05);
        porcent = 5;
    }
    console.log(`Name ${name}/salary ${salary}/porcent ${porcent}%/new salary ${newSalary}`);

    asktoRepeat();
}

function asktoRepeat() {
    let condition = true
    while (condition) {
        let option = prompt("Do you wanna do again? (y/n)")
        if(option === "y"){
            askName();
        }else if(option === "n"){
            condition = false;
        }
    }
}

askName();