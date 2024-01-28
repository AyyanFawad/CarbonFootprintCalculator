const petrolRate = 281.34;
const dieselRate = 289.71;
const cngRate = 145.00;

class CommuteCar {
    constructor(carType, carpool, inputType) {
        // carType = 1 is petrol, 2 is diesel, 3 is cng
        this.carType = carType;
        // carpool >= 1 is yes, 0 is no
        this.carpool = carpool;
        // inputType = 1 is litres, 2 is rupees
        this.inputType = inputType;
    }

    petrolMoney(rupees) {
        const litres = rupees / petrolRate;
        let carbonFootprint = litres * 2.3;

        if (this.carpool >= 1) {
            carbonFootprint /= this.carpool + 1;
        }

        return carbonFootprint;
    }

    dieselMoney(rupees) {
        const litres = rupees / dieselRate;
        let carbonFootprint = litres * 2.7;

        if (this.carpool >= 1) {
            carbonFootprint /= this.carpool + 1;
        }

        return carbonFootprint;
    }

    cngMoney(rupees) {
        const litres = rupees / cngRate;
        let carbonFootprint = litres * 2.3;

        if (this.carpool >= 1) {
            carbonFootprint /= this.carpool + 1;
        }

        return carbonFootprint;
    }

    petrolLitres(litres) {
        let carbonFootprint = litres * 2.3;

        if (this.carpool >= 1) {
            carbonFootprint /= this.carpool + 1;
        }

        return carbonFootprint;
    }

    dieselLitres(litres) {
        let carbonFootprint = litres * 2.7;

        if (this.carpool >= 1) {
            carbonFootprint /= this.carpool + 1;
        }

        return carbonFootprint;
    }

    cngLitres(litres) {
        let carbonFootprint = litres * 2.3;

        if (this.carpool >= 1) {
            carbonFootprint /= this.carpool + 1;
        }

        return carbonFootprint;
    }
}

export default CommuteCar;

// Example Usage:
// const myCar = new CommuteCar(1, 1, 2); // Creating an instance of CommuteCar
// const petrolCarbonFootprint = myCar.petrolMoney(500); // Calculating carbon footprint for 500 rupees of petrol
// console.log(petrolCarbonFootprint);
