const multer = require('multer');
var path = require('path');
const uuidv4 = require('uuid/v4');

const storage = multer.diskStorage({
    destination:(req,file, cb) => {
        cb(null,'uploads');
    },
    filename:(req,file, cb) => {
        const newfilename = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null,newfilename);
    },
});
// multer instance 
const upload = multer({storage:storage});

module.exports = upload;