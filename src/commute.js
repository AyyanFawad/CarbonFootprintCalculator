class CommuteTransport {
    constructor(Type_,Time, carpool) {
        this.Time = Time //minutes
        this.Type = Type_
        this.cp = carpool
    }

    getCarbonFootprintRickshaw() {
        const mileage = 35 // km/L
        const Distance = 40 * (this.Time/60) ;
        const Fuel = Distance / mileage ; 
        const averageCarbonFootprint = Fuel * (2.3/907.2);
        if (this.cp >= 1){
            return averageCarbonFootprint / this.cp;
        }

        return averageCarbonFootprint;
    }

    getCarbonFootprintCar(){
        // Using Alto as it is the most sold car in Pakistan 
        const mileage = 18 // km/L
        const Distance = 50 * (this.Time/60) ;
        const Fuel = Distance / mileage ; 
        // Petrol is the mmost common fuel
        const averageCarbonFootprint = Fuel * (2.3/907.2);
        if (this.cp >= 1){
            return averageCarbonFootprint / this.cp;
        }

        return averageCarbonFootprint;

    }

    getCarbonFootprintBike(){
        // values to be added 
        const mileage = 40.7 // km/L
        const Distance = 50 * (this.Time/60) ;
        const Fuel = Distance / mileage ; 
        const averageCarbonFootprint = Fuel * (2.3/907.2);
        if (this.cp >= 1){
            return averageCarbonFootprint / this.cp;
        }

        return averageCarbonFootprint;

    }

    getCarbonFootprintBus(){
        // Diesel Mini bus as a standard
        // 30 - 35 people 
        // 1.557 lb of Co2 / km 
        const mileage = 35 // km/L
        const Distance = 50 * (this.Time/60) ;
        const Fuel = Distance / mileage ; 
        // const averageCarbonFootprint = Fuel * (2.7/907.2);
        const averageCarbonFootprint = Distance * (1.557/2000)
        // if (this.cp >= 1){
        //     return averageCarbonFootprint / this.cp;
        // }

        return averageCarbonFootprint/35;

    }

    getCarbonFootprint(){
        if (this.Type=="Rickshaw" || this.Type =="Qinchi"){
            return this.getCarbonFootprintRickshaw
        }

        if (this.Type == "Car"){
            // add car stuff
            return this.getCarbonFootprintCar()
        }

        if (this.Type == "Bike"){
            return this.getCarbonFootprintBike()

        }

        if (this.Type == "Bus"){
            return this.getCarbonFootprintBus()

        }

        if (this.Type == "Walk"){
            return 0;
        }

    }

}

// give type as string, time in minutes, carpool 
const PTInstance = new CommuteTransport("Bike",30,2);
console.log(PTInstance.getCarbonFootprint())
