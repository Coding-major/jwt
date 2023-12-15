const jwt = require("jsonwebtoken");
const {CustomError, playCustomCode} = require("../error/custom-error")

const login = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        throw new CustomError("Please provide username and password", 400);
    }

    if(password.length < 8) {
        throw new playCustomCode("password length must be 8 or more", 400, true)
    }

    
    const language = "hausa"
    const id = new Date().getDate()
    const token = jwt.sign({id, language, username}, process.env.JWT_SECRET, {expiresIn: "30d"})
    res.status(200).json({msg: "user created", token})
    
}



const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization;
    const names = "my name is mustapha and i am okay"
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        throw new CustomError("No token provided", 401)
    }

   //splitting the token from the bearer and accesing the element of the new array which is element of index[1]
    const token = authHeader.split(" ")[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const secret = Math.floor(Math.random() * 100);
        res.status(200).json({msg: `welcome ${decoded.username}`, secret: `your secret number is ${secret}`})
    } catch (error) {
        throw new CustomError("Not Authorized to access this route", 401)
    }

    

}

module.exports = {login, dashboard}