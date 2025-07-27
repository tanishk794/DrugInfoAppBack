const mongoose = require("mongoose")

const URL = process.env.MONGO_URL

const databaseConnect = async ()=>{

   await mongoose.connect(URL)
    console.log("database connected")
}

module.exports = databaseConnect