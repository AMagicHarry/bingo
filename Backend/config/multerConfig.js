const multer = require('multer')
  
const mediaStorage = multer.diskStorage({})


const uploadFilterProfile = (req,file,cb) => { 
   if(file.mimetype.split('/')[0] === 'image') {
      return cb(null,true)
    } 
    cb(new multer.MulterError(code === "LIMIT_UNEXPECTED_FILE"), false)   
}


const mediaUploadProfile = multer({storage:mediaStorage,fileFilter:uploadFilterProfile})


module.exports = {mediaUploadProfile}
  