let hungry = prompt("are you hungry?");
let money = prompt("Do you have money");
let open = prompt("The restaurant is open?");

if(hungry === "no" || money === "no"){
    console.log("Today the dinner is at home");
}else if((hungry === "yes" && money === "yes") && open === "no"){
    console.log("Ask a delivery");
}else if(hungry === "yes" && money === "yes" && open === "yes"){
    console.log("You can go to dinner at the restaurant");
}


