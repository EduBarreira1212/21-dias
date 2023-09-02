let names = [];
let passwords = [];

let decision = true
while (decision) {
    let operation = parseInt(prompt("1-Register/2-Login/3-Delete/4-Close"));

    switch (operation) {
        case 1:
            let nameUser = prompt("Insert the name");
            let password =  parseInt(prompt("Insert the password"));
            register(nameUser, password);
            break;
        case 2:
            let nameLogin = prompt("Insert the name");
            let passwordLogin =  parseInt(prompt("Insert the password"));
            login(nameLogin, passwordLogin);
            break;
        case 3:
            let userNameDelete = prompt("Insert the name to delete");
            deleteUser(userNameDelete);
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

function register(name, password) {
    names.push(name);
    passwords.push(password);
}

function login(name, password) {
    if (names.includes(name) && passwords.includes(password)) {
        console.log("Login!!");
        return true;
    }else{
        console.log("Name or password incorrect");
    }
}

function deleteUser(nameDelete) {
    let index = names.indexOf(nameDelete);
    
    names.splice(index, 1);
    passwords.splice(index, 1);
}