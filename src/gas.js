// 1 cubic foot = 3.63 kg of natural gas 
// 1 cubic foot = 28.317 litres


class Gas {
    constructor(GasConsumption) {
        this.GasConsumption = GasConsumption;
        this.footprint = (0.0550 * 35.315) / 907.2; // tons // per cubic meter
        // this.convert = 28.317; // litres

    }

    moneyToUnits() {
        if (this.GasConsumption === 0) {
            return 0;
        }
        const MeterRent = 40;  //rs
        const FixedCharges1 = 400; //< 150 CM else 
        // const FixedCharges2 =  2000;
        // general sales tax =?
        // Slow meter gas charges = 143
        // slow meter gst = 26 
        // 
        // if 


        const GCV = 960.2932808; // as calculated from the bill 
        // MMBTU = (CM/28.17385) * (GCV/1000);

        // we are assuming all billpayers are tax payers and hence no with holding 

        const charges = this.GasConsumption - MeterRent - FixedCharges1 - 219;

        let MMBTU = 0;

        if (charges <= (0.25 / 28.17385) * (GCV / 1000)) {
            MMBTU = charges / 300;
        }
        else if (charges <= (0.6 / 28.17385) * (GCV / 1000)) {
            MMBTU = charges / 600;
        }
        else if (charges <= (1 / 28.17385) * (GCV / 1000)) {
            MMBTU = charges / 1000;
        }
        else if (charges <= (1.5 / 28.17385) * (GCV / 1000)) {
            MMBTU = charges / 1200;
        }
        else if (charges <= (2 / 28.17385) * (GCV / 1000)) {
            MMBTU = charges / 1600;
        }
        else if (charges <= (3 / 28.17385) * (GCV / 1000)) {
            MMBTU = charges / 3000;
        }
        else if (charges <= (4 / 28.17385) * (GCV / 1000)) {
            MMBTU = charges / 3500;
        }
        else if (charges >= (4 / 28.17385) * (GCV / 1000)) {
            MMBTU = charges / 4000;
        }

        let CM = (MMBTU * 28.17385 * 1000) / GCV;

        // console.log(CM)

        return CM

    }

    getCarbonFootprint() {
        const CM = this.moneyToUnits();
        const averageCarbonFootprint = CM * this.footprint;
        return averageCarbonFootprint;
    }
}

// const GasInstance = new Gas(890);
// console.log(GasInstance.getCarbonFootprint());
export default Gas;