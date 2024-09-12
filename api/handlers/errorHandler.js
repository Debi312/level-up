import { ContentError, CredentialsError, DuplicityError, MatchError, NotFoundError } from 'com/errors.js'
import multer from 'multer'

function errorHandler(error, req, res, next) {
    let status = 500

    if (error instanceof DuplicityError)
        status = 409
    else if (error instanceof ContentError)
        status = 400
    else if (error instanceof MatchError)
        status = 412
    else if (error instanceof CredentialsError)
        status = 401
    else if (error instanceof NotFoundError)
        status = 404

    else if (error instanceof multer.MulterError) {
        switch (error.code) {
            case "LIMIT_FILE_SIZE":
                return res.status(400).json({ message: "File is too large" });
            case "LIMIT_FILE_COUNT":
                return res.status(400).json({ message: "File limit reached" });
            case "LIMIT_UNEXPECTED_FILE":
                return res.status(400).json({ message: "File must be an image" });
            default:
                return res.status(400).json({ message: "Multer error occurred" });
        }
    }

    res.status(status).json({ error: error.constructor.name, message: error.message })
}

export default errorHandler