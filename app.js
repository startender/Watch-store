require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const hbs = require('hbs');
const path = require('path'); // модуль котырый помогает формировать путь

const app = express();
const PORT = 3000;

hbs.registerPartials(path.join(process.env.PWD, 'views/partials'));

// создает сессии на экпрессе
const session = require('express-session');

// используется для хранения наших сессий
const FileStore = require('session-file-store')(session);

const adminRouter = require('./routes/adminRouter');

// Сообщаем express, что в качестве шаблонизатора используется "hbs".
app.set('view engine', 'hbs');
// Сообщаем express, что шаблона шаблонизаторая (вью) находятся в папке "ПапкаПроекта/views".
app.set('views', path.join(__dirname, 'views'));

// Подключаем middleware morgan с режимом логирования "dev",
// чтобы для каждого HTTP-запроса на сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
// Подключаем middleware, которое позволяет читать
// содержимое body из HTTP-запросов типа POST, PUT и DELETE.
app.use(express.static(path.join(__dirname, 'public')));
// Подключаем middleware, которое сообщает epxress,
// что в папке "ПапкаПроекта/public" будут находится статические файлы,
// т.е. файлы доступные для скачивания из других приложений.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать
// переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());

app.use(
  session({
    store: new FileStore(), // хранилище для куков - папка с файлами
    secret: process.env.SECRET, // строка для шифрования сессии
    resave: false, // не пересохраняем сессию если не было изменений
    saveUninitialized: false, // не сохраняем сессию если она пустая
    // cookie: { secure: false }, // не HTTPS
    // name: 'userCookie', // имя сессионной куки
  }),
);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
