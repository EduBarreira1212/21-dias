let option = parseInt(prompt("1-gasoline/2-etanol/3-to calibrate tires"));

switch (option) {
    case 1:
        let valueGasoline = parseInt(prompt("Insert how much do you want"));
        let litersGasoline = valueGasoline/5;
        console.log(litersGasoline + " liters"); 
        break;
    case 2:
        let valueEtanol = parseInt(prompt("Insert how much do you want"));
        let litersEtanol = valueEtanol/3;
        console.log(litersEtanol + " liters"); 
        break;
    case 3:
        console.log("Tires calibrated with sucess!"); 
        break;
    default:
        break;
}