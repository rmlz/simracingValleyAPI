const Rank = require("../models/Rank");
const GenericController = require("./GenericController");

class RankController extends GenericController  {
    constructor(model) {
        super(model);
    }
}
module.exports = new RankController(Rank);
