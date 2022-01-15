var express = require('express');
var router = express.Router();
const { insertUser, deleteUser, getSingleUser, updateUser, getSingleUserImage } = require('../Controllers/userController')
const checkAuth = require('../middleware/check-auth')

const multer = require('multer');



const storage = multer.diskStorage({
    destination: 'public/images',
    filename: (req, file, cb) => {
        const extArray = file.originalname.split('.');
        const extension = extArray[extArray.length - 1];
        cb(null, `${Date.now()}.${extension}`);
    }
});
const upload = multer({
    storage: storage
});

router.post('/insert', checkAuth, upload.single('user_image'), insertUser)
router.get('/details', getSingleUser)
router.get('/image', getSingleUserImage)
router.delete('/delete', deleteUser)
router.put('/update', checkAuth, updateUser)



module.exports = router;