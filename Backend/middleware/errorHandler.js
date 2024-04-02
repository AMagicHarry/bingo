const multer = require('multer')



const errorHandler = (error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE')
            return res.json({
                message: "file is too large"
            });
         }
        if(error.code === "LIMIT_FILE_COUNT") {
            return res.json({
                message: "file limit reached"
            })
        }
        if(error.code === "LIMIT_UNEXPECTED_FILE"){
            return res.status(400).json({
                message: "File type is not proper"
            })
        }


    const status = error.status || 400
    res.status(status).json(error.message)

}

module.exports = errorHandler