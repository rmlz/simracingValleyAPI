const mongoose = require("mongoose")
const config = require("../config")

const RaceRecordsSchema = new mongoose.Schema(
    {
        car: {
            type: Array,
            required: true
        },
        track: {
            type: Array,
            required: true
        },
        laprecord: [{
            racedate: String,
            s1: String,
            s2: String,
            s3: String,
            laptime: String,
            steamID: {
                type: String,
                ref: 'Driver'
            },
            userid: String,
            username: String,
            resultId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'RaceResult'
            }
        }]
    }
)

module.exports = mongoose.model("RaceRecord", RaceRecordsSchema, config.raceRecords)
