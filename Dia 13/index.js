class Car{
    constructor(carName, power, maxSpeed, aceleration){
        this.carName = carName;
        this.power = power;
        this.maxSpeed = maxSpeed;
        this.aceleration = aceleration;
    }

    timeCalculator(distance){
        let result = distance / (this.maxSpeed/this.aceleration);
        return Number(result.toFixed(2));
    }
}
let cars = [];

let carro1 = new Car("Ferrari", 500, 320, 3.2);
cars.push(carro1);
let carro2 = new Car("Mercedes", 700, 350, 2.8);
cars.push(carro2);
let carro3 = new Car("Pagani", 950, 400, 2);
cars.push(carro3);


class Race{
    constructor(localName, type, distance){
        this.localName = localName;
        this.type = type;
        this.distance = distance;
    }
    getWinner(cars){
        let lessTime = 10000;
        let carLessTime;
        for (let i = 0; i < cars.length; i++) {
            console.log(cars[i].timeCalculator(this.distance));
            if(cars[i].timeCalculator(this.distance) < lessTime){
                lessTime = cars[i].timeCalculator(this.distance);
                carLessTime = cars[i].carName;
            }
        }
        this.winner = carLessTime;
    }
    showWinner(){
        this.getWinner(cars);
        return console.log("The winner is " + this.winner);
    }
}

let race1 = new Race("Interlagos", "F1", 4309);
race1.showWinner();