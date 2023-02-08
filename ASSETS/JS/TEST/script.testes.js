class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        console.log(`Driving my ${this.make} ${this.model}`);
    }
}

// const myCar = new Car("Toyota", "Camry");
// myCar.drive();