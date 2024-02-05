class Flights {

    constructor(hours_personal, hours_business) {

        this.footprint = 242 / 907.2; //kg -> tons

        this.p_hours = hours_personal;

        this.b_hours = hours_business;

    }


    getCarbonFootprintPersonal(hours) {

        const averageCarbonFootprintPersonal = hours * this.footprint;

        return averageCarbonFootprintPersonal;
    }


    getFootprints() {

        return this.getCarbonFootprintPersonal(this.b_hours) + this.getCarbonFootprintPersonal(this.p_hours)

    }
}
export default Flights;
// const FlightsInstance = new Flights();
// returns business , personal -> add for total