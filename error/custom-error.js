class CustomError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode;
    }
}

class playCustomCode extends Error {
    constructor(message, statusCode, expose) {
        super(message)
        this.statusCode = statusCode
        this.expose = expose
    }
}

module.exports = {CustomError, playCustomCode}