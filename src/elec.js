// const solar = 0.606; // tCO2/MWh

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

    money_to_units(){
        let Total = this.electricityConsumption - 35;

        let elect_charges = (Total)/(1+(1.5/100)+(17/100));

        let units = 0;

        const rate1 = 5.95;
        const rate2 = 7.67;
        const rate3 = 18.55;
        const rate4 = 24.86;
        const rate5 = 27.56;
        const rate6 = 35.54;

        if (elect_charges<=0){
            return 0;
        }

        if((elect_charges/rate1)<=50){
            units = elect_charges/rate1;
        } 
        else if ((elect_charges/rate2)<=100){
            units = elect_charges/rate2;
        }
        else if ((elect_charges/rate3)<=200){
            units = elect_charges/rate3;
        }
        else if ((elect_charges/rate4)<=300){
            units = elect_charges/rate4;
        }
        else if ((elect_charges/rate5)<=700){
            units = elect_charges/rate5;
        }
        else if ((elect_charges/rate6)>700){
            units = elect_charges/rate6;
        }

        return units;
    }

    getCarbonFootprint() {
        // one unit is 1kWh
        // const averageCarbonFootprint = this.electricityConsumption * 0.0001 * this.average;
        const U = this.money_to_units();
        const ieaAverageCarbonFootprint = (U * 0.0001 * this.ieaAverage)/30;
        return ieaAverageCarbonFootprint;
    }
}

// const electricityInstance = new Electricity(100);
// console.log(electricityInstance.getCarbonFootprint());
export default Electricity;