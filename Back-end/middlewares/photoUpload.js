import multer from "multer"
import path from 'path'

const DIR = '../../images'
//Setting storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'images/')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

const upload = multer({
    storage: storage,
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(png|jpg)$/)) {
            return cb ({message: "upload image file"})
        }
        cb(null, true)
    }
});
  
  
export default upload