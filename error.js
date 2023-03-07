

class ValidationError extends Error {

    constructor(message) {
        super(message)
        this.name = 'ValidationError'
    }
}

const throwValidationError = () => {
    throw new ValidationError()
}


