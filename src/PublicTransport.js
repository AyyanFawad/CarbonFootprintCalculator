class CommutePublicTransport {
    constructor(Time) {
        this.Time = Time //minutes

    }

    getCarbonFootprintRickshaw(carpool) {
        // one unit is 1kWh
        const mileage = 35 // km/L
        // const Distance = 40 * (this.Time / 60);
        const Fuel = 40 / mileage;
        const averageCarbonFootprint = Fuel * 2.3;
        if (carpool >= 1) {
            return averageCarbonFootprint / carpool;
        }

        return averageCarbonFootprint;
    }
}

export default CommutePublicTransport;