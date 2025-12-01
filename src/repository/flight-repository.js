const {Flights} = require('../models/index');
const { Op } = require('sequelize');        

class FlightRepository {

#createFilter(data) {
    let filter = {};

    if (data.arrivalAirportId) {
        filter.arrivalAirportId = data.arrivalAirportId;
    }

    if (data.departureAirportId) {
        filter.departureAirportId = data.departureAirportId;
    }

    // If both min and max exist → add AND block
    if (data.minPrice && data.maxPrice) {
        filter.price = {
            [Op.and]: [
                { [Op.gte]: data.minPrice },
                { [Op.lte]: data.maxPrice }
            ]
        };
    }
    // If only min exists
    else if (data.minPrice) {
        filter.price = { [Op.gte]: data.minPrice };
    }
    // If only max exists
    else if (data.maxPrice) {
        filter.price = { [Op.lte]: data.maxPrice };
    }

    return filter;
}


    async createFlight(data) {
        try { 
            const flight = await Flights.create(data);
            return flight;
        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
            }
        }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }       
    }
    
    async getAllFlights(filter) {
        try {
            const filterObject = this.
            #createFilter(filter);
            const flights = await Flights.findAll({
                where: filterObject
            });
            console.log(flights);
            return flights;
        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }   
    }

module.exports = FlightRepository;