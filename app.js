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




2.   //useContext — это один из встроенных хуков, который позволяет компонентам подписываться на контекст и получать доступ к данным контекста. Используется для передачи данных через дерево компонентов без необходимости передавать пропсы на каждом уровне. Это особенно полезно для глобальных данных, таких как текущий авторизованный пользователь, тема (светлая/темная) или настройки локализации.

//Создание контекста:

//Для создания контекста используется функция createContext. Она возвращает объект контекста, который содержит два компонента: Provider и Consumer.

/*import React, { createContext, useState } from 'react';

const MyContext = createContext();*/

//Provider

//Компонент Provider используется для предоставления значения контекста всем дочерним компонентам. Все компоненты внутри Provider могут получить доступ к значениям, переданным в value.


/*const MyProvider = ({ children }) => {
    const [state, setState] = useState('Hello World');

    return (
      <MyContext.Provider value={{ state, setState }}>
        {children}
      </MyContext.Provider>
    );
  };*/
  
//useContext

//Используется для подписки на контекст в функциональных компонентах. Он принимает объект контекста, возвращаемый из createContext, и возвращает текущее значение контекста

/*import React, { useContext } from 'react';

const MyComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState('New Value')}>Change Value</button>
    </div>
  );
};*/

import React, { createContext, useState, useContext } from 'react';

// Создание контекста
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState('Hello World');

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

const MyComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState('New Value')}>Change Value</button>
    </div>
  );
};

const App = () => (
  <MyProvider>
    <MyComponent />
  </MyProvider>
);

export default App;

//useContext — это хук, который позволяет компонентам получать данные из контекста. Он используется для доступа к глобальным данным без необходимости передавать пропсы на каждом уровне компонента.


3. //CSS
//Блоки с overflow: hidden, position: absolute, или display: inline-block:
//Такие блоки не участвуют в схлопывании отступов.

//Схлопывание границ — это процесс объединения вертикальных отступов соседних блоков в один, чтобы избежать удвоения отступов. В результате итоговый отступ равен наибольшему из схлопывающихся отступов.

//Flexbox и Grid:
//Элементы, расположенные с помощью Flexbox или Grid, не схлопывают свои отступы.



4. //Методология БЭМ (Блок, Элемент, Модификатор) — это подход к написанию и организации CSS кода, который помогает создавать масштабируемые и поддерживаемые интерфейсы. Основные преимущества методологии:


//1. Четкая структура и семантика

//БЭМ обеспечивает ясную и логичную структуру именования классов, что делает код более читаемым и понятным. Это особенно полезно в больших проектах.

/*<div class="button button--primary">
  <span class="button__text">Click me</span>
</div>*/

//button — блок
//button__text — элемент
//button--primary — модификатор


//Изоляция компонентов

//Блоки в БЭМ независимы и изолированы друг от друга, что предотвращает проблемы с каскадностью и неожиданным переопределением стилей.

/*<div class="header">
  <div class="header__logo"></div>
  <div class="header__nav"></div>
</div>

<div class="footer">
  <div class="footer__logo"></div>
</div>*/


//Легкость в переиспользовании

//Блоки можно легко переиспользовать в разных частях проекта или даже в разных проектах без изменения их стилей.

/*<div class="card">
  <div class="card__title">Title</div>
  <div class="card__content">Content</div>
</div>

<div class="profile">
  <div class="card">
    <div class="card__title">Profile Title</div>
    <div class="card__content">Profile Content</div>
  </div>
</div>*/


//Удобство в поддержке и масштабировании

//Благодаря четкой структуре и изоляции, код написанный по БЭМ легче поддерживать и масштабировать. Добавление новых компонентов или модификация существующих не вызывает каскадных изменений в других частях системы.

//Унификация стилей

//Методология БЭМ способствует унификации и стандартизации стилей, что упрощает работу с проектом и делает его более предсказуемым

/*
<div class="menu">
  <div class="menu__item menu__item--active">Home</div>
  <div class="menu__item">About</div>
  <div class="menu__item">Contact</div>
</div>
 */


//Методология БЭМ упрощает чтение, поддержку и масштабирование кода за счет четкой структуры, изоляции компонентов и унификации стилей. Она делает интерфейсы более предсказуемыми и удобными для работы в команде.



