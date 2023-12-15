import mongoose from "mongoose";

connection = "mongodb://localhost:27017/JWT";

const connectDB = (url) => {
    return mongoose.createConnection(connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB