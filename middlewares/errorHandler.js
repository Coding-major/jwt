const {customError} = require("../errors/index")
const {StatusCodes} = require("http-status-codes")
const errorHandler = (err, req, res, next) => {

    if(err instanceof customError) {
        return res.status(err.statusCode).json({msg: err.message});
    } else  {
       console.log(err)
       return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({msg: "Dear customer Error has occured, we will back shortly", stack: typeof err.expose});
    }

}

module.exports = errorHandler