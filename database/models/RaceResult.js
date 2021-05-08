const mongoose = require("mongoose")
const config = require("../config")

const RaceResultSchema = new mongoose.Schema(
    {
        timestamp: Number,
        racedate: String,
        practicefilename: String,
        practice: [
            {
                position: String,
                driver: String,
                laps: [
                    {
                        position: String,
                        fuel: String,
                        s1: String,
                        s2: String,
                        s3: String,
                        laptime: String,
                        bests1: Boolean,
                        bests2: Boolean,
                        bests3: Boolean,
                        bestlap: Boolean
                    }
                ],
                steamID: {
                    type: String,
                    ref: "Driver"
                },
                userid: String,
                incidents: Number,
                finishstatus: String,
                bestlap: String
            }
        ],
        qualifyfilename: String,
        qualify: [
            {
                position: String,
                driver: String,
                laps: [
                    {
                        position: String,
                        fuel: String,
                        s1: String,
                        s2: String,
                        s3: String,
                        laptime: String,
                        bests1: Boolean,
                        bests2: Boolean,
                        bests3: Boolean,
                        bestlap: Boolean
                    }
                ],
                steamID: {
                    type: String,
                    ref: "Driver"
                },
                userid: String,
                incidents: Number,
                finishstatus: String,
                bestlap: String
            }
        ],
        racefilename: String,
        race: [
            {
                position: String,
                driver: String,
                laps: [
                    {
                        position: String,
                        fuel: String,
                        s1: String,
                        s2: String,
                        s3: String,
                        laptime: String,
                        bests1: Boolean,
                        bests2: Boolean,
                        bests3: Boolean,
                        bestlap: Boolean
                    }
                ],
                steamID: {
                    type: String,
                    ref: "Driver"
                },
                userid: String,
                incidents: Number,
                st_position: String,
                lapsled: String,
                finishstatus: String,
                bestlap: String
            }
        ],
        rated: Boolean,
        srvsettings: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ScheduledRace"
            },
            tracks: [
                {type: String}
            ],
            cars: [
                {type: String}
            ],
            date: String,
            time: String,
            carviews: [
                {type: String}
            ],
            damages: [
                {type: String}
            ],
            fixsetups: [
                {type: String}
            ],
            fueltires: [
                {type: String}
            ],
            pitreturns: [
                {type: String}
            ],
            help: [
                {type: String}
            ],
            mechfailures: [
                {type: String}
            ],
            maxplayers: String,
            ip: String,
            password: String,
            flags: [
                {type: String}
            ],
            tireset: [
                {type: String}
            ],
            session: [
                {type: String}
            ],
            starttime: [
                {type: String}
            ],
            starttypes:[
                {type: String}
            ],
            trackconds: [
                {type: String}
            ],
            trackprogresses: [
                {type: String}
            ],
            started: Boolean,
            racefinishes: [
                {type: String}
            ],
            downstream: String,
            upstream: String,
            fixupgrades: [
                {type: String}
            ],
            warmups: [
                {type: String}
            ],
            privatequalies: [
                {type: String}
            ],
            timescales: [
                {type: String}
            ],
            Done: Boolean,
            participants: [
                {type: String}
            ],
            user: {
                id: String,
                username: String
            },
            official: Boolean,
            timestamp: Number
        }
    }
)

module.exports = mongoose.model("RaceResult", RaceResultSchema, config.raceResults)
