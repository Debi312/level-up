import logic from "../logic/index.js"
import jwt from "../utils/jsonwebtoken-promised.js"
import { CredentialsError } from "com/errors.js"
import { uploadFile } from "../utils/S3.js"

const { JWT_SECRET } = process.env

const createPostHandler = (req, res, next) => {

    const file = req.file
    const generateFileName = () => {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }
    const imageName = generateFileName()
    const fileBuffer = file.buffer
    const fileMimeType = file.mimetype

    if (!file) {
        return res.status(400).send(new SystemError('Image file is required'));
    }



    try {
        const token = req.headers.authorization.slice(7)
        jwt.verify(token, JWT_SECRET)
            .then(payload => {
                const { sub: userId } = payload
                const { workoutId, description, time, repetitions, weight } = req.body
                try {
                    uploadFile(fileBuffer, imageName, fileMimeType)
                        .then(() => {

                            return logic.createPost(userId, workoutId, imageName, description, time, repetitions, weight)
                        })
                        .then(() => res.status(201).json({}))
                        .catch(error => next(error))
                } catch (error) {
                    next(error)
                }
            })
            .catch(error => next(new CredentialsError(error.message)))

    } catch (error) {
        next(error)
    }
}

export default createPostHandler