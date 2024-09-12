import logic from "../logic/index.js"
import jwt from "../utils/jsonwebtoken-promised.js"
import { CredentialsError } from "com/errors.js"
import { getFile } from "../utils/S3.js"


const { JWT_SECRET } = process.env

const getPostsHandler = (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7)

        jwt.verify(token, JWT_SECRET)
            .then(payload => {
                const { sub: userId } = payload
                logic.getPosts(userId)
                    .then(posts => {
                        return Promise.all(
                            posts.map(post => {
                                return getFile(post.image)
                                    .then(url => {
                                        post.imageUrl = url
                                        return post
                                    })
                                    .catch(error => {
                                        next(error)
                                        return post 
                                    })
                            })
                        )
                    })
                    .then(post => res.json(post))
                    .catch(error => next(error))
            })
            .catch(error => next(new CredentialsError(error.message)))
    } catch (error) {
        next(error)
    }
}


export default getPostsHandler
