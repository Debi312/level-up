import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { SystemError } from "com/errors.js"
const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_BUCKET_NAME, AWS_REGION } = process.env

const s3Client = new S3Client({
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    
    },
    region: AWS_REGION
})

export const uploadFile = (fileBuffer, fileName, mimetype) => {
    console.log(`Uploading file: ${fileName} with mimetype: ${mimetype}`)
    const command = new PutObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Body: fileBuffer,
        Key: fileName,
        ContentType: mimetype
    })

    return s3Client.send(command)
        .then(() => fileName)
        .catch(error => { throw new SystemError(error.message) })

}


export const getFile = (key) => {
    if (!key) {
        console.log("Key is required to get the file from S3.");
       
    }
    const command = new GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: key
    })

    return getSignedUrl(s3Client, command, { expiresIn: 3600 })
        .then(url => url)
        .catch(error => { throw new SystemError(error.message) })

}

