const Driver = require("../models/Drivers")
const GenericController = require("./GenericController");

class DriverController extends GenericController  {
    constructor(model) {
        super(model);
    }
}
module.exports = new DriverController(Driver);
