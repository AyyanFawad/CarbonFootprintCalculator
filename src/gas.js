const solar = 0.606; // tCO2/MWh

class Gas {
    constructor(GasConsumption) {
        this.GasConsumption = GasConsumption;
        this.footprint = 0.0550; // kg 
        // this.convert = 28.317; // litres

    }

    getCarbonFootprint() {
        // one unit is 1kWh
        const averageCarbonFootprint = this.GasConsumption * this.footprint;
        return averageCarbonFootprint;
    }
}

// const GasInstance = new Gas(100);
// console.log(GasInstance.getCarbonFootprint());

export default Gas;