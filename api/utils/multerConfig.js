import multer from 'multer';
import { dirname, extname, join } from 'path';
import { fileURLToPath } from 'url';


const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
const MIMETYPES = ['image/jpeg', 'image/png'];

const storage = multer.memoryStorage({
    destination: join(CURRENT_DIR, '../uploads'),
    filename: (req, file, cb) => {
        const fileExtension = extname(file.originalname);
        const fileName = file.originalname.split(fileExtension)[0];

        cb(null, `${fileName}-${Date.now()}${fileExtension}`);
    },
})


const fileFilter = (req, file, cb) => {
    if (MIMETYPES.includes(file.mimetype)) cb(null, true);
    else cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"));
}
const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 10000000,
    },
})

export default upload