require("dotenv").config();
require("express-async-errors");
const express = require("express")
const app = express();
//import connectDB from "./connect/connect"

const mainRouter = require("./routes/main")


const notFoundMiddleware = require("./middlewares/notFound")
const errorHandlerMiddleware = require("./middlewares/errorHandler")



//middleware
app.use(express.json());
app.use("/api/v1", mainRouter)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

 





//connection
const port = process.env.PORT || 3000;

const start = async()=> {
    try {
    //await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`app is listening at port: ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()
