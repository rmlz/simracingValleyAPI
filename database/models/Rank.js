const mongoose = require("mongoose")
const config = require("../config")

const RatingSchema = new mongoose.Schema(
    {
        filename: String,
        positions: [
            {
                points: Number,
                steamID: String,
                rank_pos: Number
            }
        ]
    }
)

module.exports = mongoose.model("Rank", RatingSchema, config.ranking)
