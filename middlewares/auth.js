const jwt = require("jsonwebtoken")
const {customError, unAuthenticatedError, badRequest } = require("../error/index");



const authcheck = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        throw new unAuthenticatedError("No ttoken provided")
    }
    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)


        const {id, username} = decoded
        //we can also use this method to assign the value
        // const id = decoded.id
        // const username = decoded.username

        req.user = {id, username} 
        next()

    } catch (error) {
        throw new customError("Not Authorized to access this route", 401)
    }
    
}

module.exports = authcheck