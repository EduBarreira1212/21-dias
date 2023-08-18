let driverName = prompt("Insert your name");
let age = prompt("insert your age");
let driverLicense = prompt("Do you have driver license?");
let car = prompt("Do you have car?");

if(age < 18 || driverLicense === "no"){
    console.log(`${driverName}, you can't drive`);
}else if(age >= 18 && driverLicense === "yes" && car === "no"){
    console.log(`${driverName}, you can drive, but you don't have car`);
}else if(age >= 18 && driverLicense === "yes" && car === "yes"){
    console.log(`${driverName}, you will be the driver`);
}