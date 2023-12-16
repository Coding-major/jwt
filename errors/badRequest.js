const customError = require("./custom-error");
const {StatusCodes} = require("http-status-codes")

class badRequest extends customError {
    constructor(message) {
        super(message)
        this.code = StatusCodes.BAD_REQUEST
    }

}

module.exports = badRequest