// Cкачиваем npm i multer и подключаем мультер. Он позволяет загружать свои файлы в посты

const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/img/');
  },
});

const upload = multer({ storage });

module.exports = upload;
