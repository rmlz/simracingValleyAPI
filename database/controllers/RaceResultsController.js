const RaceResult = require("../models/RaceResult")
const GenericController = require("./GenericController");

class RaceResultsController extends GenericController  {
    constructor(model) {
        super(model);
    }
}
module.exports = new RaceResultsController(RaceResult);
