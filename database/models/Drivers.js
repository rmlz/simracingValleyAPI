const mongoose = require("mongoose")
const config = require("../config")

const DriverSchema = new mongoose.Schema(
    {
        unique_name: {
            type: String,
            required: true
        },
        races_done:{
            type: Number,
            required: false
        },
        steamID: {
            type: String,
            required: true,
            unique: true
        },
        rating: {
            mu: Number,
            sigma: Number
        },
        points: {
            type: Number,
            required: false
        },
        top10: {
            1: Number,
            2: Number,
            3: Number,
            4: Number,
            5: Number,
            6: Number,
            7: Number,
            8: Number,
            9: Number,
            10: Number
        },
        penalized: {
            type: Boolean,
            required: false
        },
        incidents: {
            type: Number,
            required: false
        },
        classimg: {
            type: String,
            required: false
        },
        pole: {
            type: Number,
            required: false
        },
        incident_ave: {
            type: Number,
            required: false
        },
        rank_pos: {
            type: Number,
            required: false
        },
        races_15: {
            type: Number,
            required: false
        },
        votes: {
            type: Number,
            required: false
        }
    }
)

module.exports = mongoose.model("Driver", DriverSchema, config.drivers)
