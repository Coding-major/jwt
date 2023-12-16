jwt = require("jsonwebtoken")
const {CustomError} = require("../errors/custom-error");

const login = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        throw new CustomError("Please provide username and password", 400);
    }

    if(password.length < 8) {
        throw new CustomError("password length must be 8 or more", 400)
    }

    
    const language = "hausa"
    const id = new Date().getDate()
    const token = jwt.sign({id, language, username}, process.env.JWT_SECRET, {expiresIn: "30d"})
    res.status(200).json({msg: "user created", token})
    
}



const dashboard = async (req, res) => {
    

   //splitting the token from the bearer and accesing the element of the new array which is element of index[1]
    
   const secret = Math.floor(Math.random() * 100);
   res.status(200).json({msg: `welcome ${req.user.username}`, secret: `your secret number is ${secret}`})
   
}

module.exports = {login, dashboard}