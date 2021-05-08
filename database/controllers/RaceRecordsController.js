const RaceRecord = require("../models/RaceRecords");
const GenericController = require("./GenericController");

class RaceRecordController extends GenericController  {
    constructor(model) {
        super(model);
    }
}
module.exports = new RaceRecordController(RaceRecord);
