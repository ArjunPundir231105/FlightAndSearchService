const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async (req,res) => {
    try{
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
        data: city,
        success: true,
        message: "Successfully created a city",
        err:{}
    });
    }catch(error){
        console.log("Something went wrong in the controller layer");
        return res.status(500).json({
            data:{},
            success: false,
            message: "Unable to create a city",
            err: error
        }); 
    }
}

// DELETE City
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the city",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to delete the city",
            err: error
        });
    }
};


// UPDATE City
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the city",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update the city",
            err: error
        });
    }
};


// GET City by ID
const get = async (req, res) => {
    try {
        const responce = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: responce,
            success: true,
            message: "Successfully fetched the city",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch the city",
            err: error
        });
    }
};


module.exports = {
    create,
    destroy,
    update,
    get
}