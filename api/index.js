import "dotenv/config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import routeHandler from "./handlers/index.js"
import errorHandler from "./handlers/errorHandler.js"
import populateDatabase from "./data/populate/populate.js"
import upload from "./utils/multerConfig.js"

const { MONGODB_URL, PORT } = process.env


mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log("Database connected")

        const api = express()
        api.use(express.static("public"))
        api.use(cors())
        const jsonBodyParser = express.json({ strict: true, type: "application/json" })

        api.listen(PORT, () => {
            console.log(`API running on PORT ${PORT}`)

            populateDatabase().catch(error => {
                console.error("Error populating database:", error)
            })
        })

        api.get("/", (req, res) => res.send("Hello world"))
        api.post("/users", jsonBodyParser, routeHandler.registerUserHandler)
        api.post("/users/auth", jsonBodyParser, routeHandler.authenticateUserHandler)
        api.get("/users/:targetUserId", routeHandler.getUsernameHandler)
        api.get("/workouts/:workoutType", routeHandler.getRandomWorkoutHandler)
        api.post("/posts", upload.single('image'), routeHandler.createPostHandler)
        api.get("/posts", routeHandler.getPostsHandler)
        api.patch("/posts/:postId/likes", routeHandler.toggleLikePostHandler)
        api.post("/posts/:postId/comments", jsonBodyParser, routeHandler.createCommentHandler)
        api.get("/posts/:postId/comments", routeHandler.getAllCommentsHandler)
        api.get("/results", routeHandler.getAllResultsHandler)
        api.get("/results/:resultId", routeHandler.getResultHandler)
        api.delete("/results/:resultId", routeHandler.deleteResultHandler)
        api.patch("/results/:resultId", jsonBodyParser, routeHandler.updateResultHandler)
        
        //api.post("/upload", upload.single('file'), routeHandler.uploadFileHandler)
        
        api.use(errorHandler)

    })
    .catch(error => console.error("Error connecting to database:", error))