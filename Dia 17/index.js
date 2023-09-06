import { Hotel } from "./entities/HotelClass.js";
import { Reserve } from "./entities/Reserva.js";

let hotelArray = [];
let reserveArray = [];
let idHotel = 1;
let idReserve = 1;

let condition = true;
do {
    let option = parseInt(prompt("Choose a option: \n1-Register a hotel \n2-Register a reserve \n3-Search the reserve by hotel \n4-Search hotel by reserve \n5- Search reserve by name \n6- Search hotel by category \n7-Update hotel's phone \n8-End"));

    switch (option) {
        case 1:
            registerHotel();
            break;
        case 2:
            registerReserve();
            break;
        case 3:
            showHotel(prompt("Insert the hotel's id"));
            break;
        case 4:
            searchById(prompt("Insert the reserve's id"));
            break;
        case 5:
            showReserves(prompt("Insert the reserve's name"));
            break;
        case 6:
            sameCategory(prompt("Insert the hotel's category"));
            break;
        case 7:
            updateHotel(prompt("Insert the hotel's id"), parseInt(prompt("Insert the number")));
            break;
        case 8:
            console.log("End!!");
            condition = false;
            break;
        default:
            console.log("Invalid option");
            break;
    }
} while (condition);

function registerHotel() {
    let name = prompt("Insert the hotel's name");
    let category = prompt("Insert the category");
    let adress = prompt("Insert the hotel's adress");
    let phone = parseInt(prompt("Insert the phone"));
    let hotel = new Hotel(idHotel, name, category, adress, phone);
    hotelArray.push(hotel);
    idHotel++;
}

function registerReserve() {
    let idHotel;
    let exist = false;
    do {
        idHotel = parseInt(prompt("Insert the hotel's id"));
        for (let i = 0; i < hotelArray.length; i++) {
            if(idHotel == hotelArray[i].id){
                i = hotelArray.length;
                exist = true;
            }else if(i == hotelArray.length - 1){
                console.log("ID non existent");
            }
        }
    } while (!exist);
    let name = prompt("Insert the hotel's name");
    let entryDay = prompt("Insert the entry day");
    let outDay = prompt("Insert the out day");
    let reserve = new Reserve(idReserve, idHotel, name, entryDay, outDay);
    reserveArray.push(reserve);
    idReserve++;
}

function showHotel(hotelId) {
    let reserves = reserveArray.filter(reserve => reserve.hotelId == hotelId);
    let hotel = hotelArray.find(hotel => hotel.id == hotelId);
    for (const reserve of reserves) {
        console.log(hotel.name);
        console.log("Name reserve: " + reserve.nameReserve);
        console.log("Entry day: " + reserve.entryDay);
        console.log("Out day: " + reserve.outDay);
    }
    console.log("==================");
}

function searchById(reserveId) {
    let reserve = reserveArray.find(reserve => reserve.id == reserveId);
    let hotel = hotelArray.find(hotel => hotel.id == reserve.id);
    console.log("Hotel's name: " + hotel.name);
    console.log("Hotel's adress: " + hotel.adress);
    console.log("Entry day: " + reserve.entryDay);
    console.log("Out day: " + reserve.outDay);
    console.log("==================");
}

function showReserves(nameReserve) {
    let reserves = reserveArray.filter(reserve => reserve.nameReserve == nameReserve);
    console.table(reserves);
    console.log("==================");
}

function sameCategory(category) {
    let hotels = hotelArray.filter(hotel => hotel.category == category);
    console.table(hotels);
    console.log("==================");
}

function updateHotel(hotelId, phone) {
    let hotel = hotelArray.find(hotel => hotel.id == hotelId);
    hotel.phone = phone;
    console.log(hotel);
    console.log("==================");
}