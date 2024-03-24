const {cloudinary} = require('../config/cloudinaryConfig')

const uploadProfilePic = async(req, res, next) => {
    try {
        const {path} = req.file; 

        const uploadedResponse = await cloudinary.uploader.upload(path, {
            upload_preset: 'deck_task',
        });

        res.status(200).json(uploadedResponse);
    } catch (error) {
        console.error(error);
        next({ message: 'Internal server error' });
    }
}

module.exports = {
    uploadProfilePic
}
