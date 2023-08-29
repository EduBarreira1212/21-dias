let names = [];
let passwords = [];

let index = 0;
let decision = true
while (decision) {
    let operation = parseInt(prompt("1-Register/2-Login/3-Delete/4-Close"));

    switch (operation) {
        case 1:
            let nameUser = prompt("Insert the name");
            names[index] = nameUser;
            let password =  parseInt(prompt("Insert the password"));
            passwords[index] = password;
            console.log(names[index]);
            console.log(passwords[index]);
            index++;
            break;
        case 2:
            let nameLogin = prompt("Insert the name");
            let passwordLogin =  parseInt(prompt("Insert the password"));
            for (let i = 0; i < names.length; i++) {
                if (nameLogin === names[i] && passwordLogin === passwords[i]){
                    console.log("Login!!!");
                }else if(i == (names.length - 1)){
                    console.log("Name or password incorrect");
                } 
            }
            break;
        case 3:
            let namesAux = [];
            let passwordsAux = [];
            let contAux = 0;
            let userNameDelete = prompt("Insert the name to delete");
            for (let i = 0; i < names.length; i++) {
                if (userNameDelete === names[i]) {
                    console.log("User deleted!!");
                }else{
                    namesAux[contAux] = names[i];
                    passwordsAux[contAux] = passwords[i];
                    contAux++;
                }
            }

            names = namesAux;
            passwords = passwordsAux;
            break;
        case 4:
            decision = false;
            break;
        default:
            console.log("Invalid operation");
            break;
    }
}

console.table(names);
console.table(passwords);