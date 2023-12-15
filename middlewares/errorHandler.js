const {CustomError, playCustomCode} = require("../error/custom-error")
const errorHandler = (err, req, res, next) => {
    if(err instanceof CustomError) {
        return res.status(err.statusCode).json({msg: err.message});
    } else if(err instanceof playCustomCode) {
        return res.status(err.statusCode).json({message: err.message, expose: err.expose})
    } else  {
       console.log(err)
       return res
        .status(500)
        .json({msg: "Dear customer Error has occured, we will back shortly", stack: typeof err.expose});
    }
}

module.exports = errorHandler