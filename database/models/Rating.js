const mongoose = require("mongoose")
const config = require("../config")

const RatingSchema = new mongoose.Schema(
    {
        filename: String,
        result: [
            {
                steamID: {
                    type: String,
                    ref: "Driver"
                },
                mu: Number,
                sigma: Number,
                points: Number
            }
        ]
    }
)

module.exports = mongoose.model("Rating", RatingSchema, config.rating)
