/*Cookies (куки) — это небольшие кусочки данных, хранящиеся в браузере и используемые для сохранения информации о пользователе. Вот основные особенности:

1️⃣Хранение данных на клиенте
Хранятся на стороне клиента (в браузере) и используются для сохранения информации, которая может быть полезна при последующих посещениях веб-сайта.

2️⃣Ограниченный размер
Размер каждого куки ограничен (обычно до 4KB). Поэтому куки не подходят для хранения больших объемов данных.

3️⃣Срок действия (время жизни)
Каждая кука имеет время жизни, которое задается параметром Expires или Max-Age. По истечении этого времени кука автоматически удаляется браузером.

4️⃣Доступность по домену и пути
Доступны только для указанного домена и пути. Это позволяет ограничивать доступ к кукам для других страниц и поддоменов.

5️⃣Безопасность (HTTP-only и Secure)
✅HTTP-only: Куки, установленные с флагом HttpOnly, недоступны через JavaScript, что помогает защитить данные от XSS-атак.
✅Secure: Куки, установленные с флагом Secure, передаются только по защищенному HTTPS соединению.

6️⃣Передача с запросами
Автоматически отправляются серверу с каждым HTTP-запросом к соответствующему домену, что позволяет серверу узнавать пользователя и сохранять его сессию.*/


//Установка куки через JavaScript
document.cookie = "username=John Doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
   
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  console.log(getCookie('username')); // 'John Doe'
  
  //Удаление куки через JavaScript

  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
   
//Установка куки на сервере (Node.js с Express):

/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.cookie('username', 'John Doe', { maxAge: 900000, httpOnly: true });
  res.send('Cookie has been set');
});

app.listen(3000);*/

//Чтение куки на сервере (Node.js с Express):

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
  const username = req.cookies.username;
  res.send(`Username is: ${username}`);
});

app.listen(3000);

//Куки — это небольшие данные, хранящиеся в браузере. Они имеют ограниченный размер, время жизни, и доступны по определенному домену и пути. Куки могут быть защищены флагами HttpOnly и Secure, и автоматически отправляются серверу с каждым запросом.


