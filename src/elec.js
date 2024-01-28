const solar = 0.606; // tCO2/MWh

class Electricity {
    constructor(electricityConsumption) {
        this.electricityConsumption = electricityConsumption;
        this.solar = 0.606; // tCO2/MWh
        this.hydro = 0.505; // tCO2/MWh
        this.average = 0.707; // tCO2/MWh

        this.solarShare = 0.94;
        this.hydroShare = 23.93;

        this.ieaAverage = (39.5 / 10 ** 12) * 3.6 * 10 ** 9; // tCO2/MWh
        // console.log("The average carbon footprint of electricity in the world is: ", this.ieaAverage, "tCO2/kWh");
    }

    getCarbonFootprint() {
        // one unit is 1kWh
        const averageCarbonFootprint = this.electricityConsumption * 0.0001 * this.average;
        const ieaAverageCarbonFootprint = this.electricityConsumption * 0.0001 * this.ieaAverage;
        return ieaAverageCarbonFootprint;
    }
}

// const electricityInstance = new Electricity(100);
// console.log(electricityInstance.getCarbonFootprint());
export default Electricity;
