const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req , file , cb)=>{
        cb(null, path.join(__dirname, "../uploads/product_images"));
    },
    filename: (req , file , cb)=>{
        const uniquieName = Date.now() + "-" + file.originalname;
        cb(null, uniquieName);
    }
});


const upload = multer({storage:storage});

module.exports = upload;