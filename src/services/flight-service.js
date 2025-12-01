const { AirplaneRepository } = require('../repository');
const FlightRepository = require('../repository/flight-repository');
const { compareTime } = require('../utils/helper');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

async createFlight(data) {
    try {
        if(!compareTime(data.arrivalTime,data.departureTime)){
            throw {error:"Departure time cannot be greater than arrival time"};
        }
    const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
    const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity}
    );
    return flight;
    } catch (error) {
        console.log("Something went wrong in the service layer",error);
        throw { error };
    }
}

async getFlight(flightId) {}


async getAllFlights(filter) {
        try {
            const flights = await this.flightRepository.getAllFlights(filter);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;

