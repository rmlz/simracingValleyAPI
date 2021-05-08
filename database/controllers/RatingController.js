const Rating = require("../models/Rating");
const GenericController = require("./GenericController");

class RatingController extends GenericController  {
    constructor(model) {
        super(model);
    }
}
module.exports = new RatingController(Rating);
