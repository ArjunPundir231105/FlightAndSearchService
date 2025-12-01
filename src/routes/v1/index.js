const express = require('express');

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');



const router = express.Router();    

router.post('/city', CityController.create);            // create
router.get('/city/:id', CityController.get);            // get city by id
router.get('/city', CityController.getAll);             // get all cities
router.patch('/city/:id', CityController.update);       // update city
router.delete('/city/:id', CityController.destroy);     // delete city

router.post('/flights', FlightController.create);
        // create flight
router.get('/flights', FlightController.getAll);    

router.post('/airports', AirportController.create);//  create airport
module.exports = router; 