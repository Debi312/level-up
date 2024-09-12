const uploadFileHandler = (req, res, next) => {
    try {
        if (!req.file || req.file.length === 0) {
            return res.status(400).json({ message: "No files uploaded" });
        }
        console.log("Files uploaded:", req.file)
        res.status(201).send()
     
    } catch (error) {
        next(error)
    }
}


export default uploadFileHandler