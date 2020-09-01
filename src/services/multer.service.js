const multer = require('multer')

const fileUpload = multer({
  storage: multer.diskStorage({})
  //   fileFilter: (req, file, cb) => {
  //     if (!file.mimetype.match(/jpg|jpeg|png|$i/)) {
  //       return cb(new Error("File is not supported"), false);
  //     }

  //     cb(null, true);
  //   },
})

module.exports = { fileUpload }
