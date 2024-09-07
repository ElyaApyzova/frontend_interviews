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


5.  //Всплытие (или бабблинг, event bubbling) — это механизм обработки событий в веб-разработке, при котором событие, происходящее на одном элементе, сначала обрабатывается этим элементом, а затем последовательно передаётся (всплывает) вверх по дереву DOM к его родительским элементам вплоть до корневого элемента (обычно document).


//Как работает всплытие событий

//Когда это происходит на элементе, сначала выполняются обработчики, прикрепленные к самому элементу, затем к его родителю, потом к родителю родителя, и так далее до document.

/*<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Bubbling</title>
</head>
<body>
  <div id="parent" style="padding: 20px; background-color: lightblue;">
    Parent
    <div id="child" style="padding: 20px; background-color: lightcoral;">
      Child
    </div>
  </div>

  <script>
    document.getElementById('parent').addEventListener('click', () => {
      alert('Parent clicked!');
    });

    document.getElementById('child').addEventListener('click', () => {
      alert('Child clicked!');
    });
  </script>
</body>
</html>*/


//Управление всплытием

//Иногда нужно предотвратить всплытие события, чтобы оно не передавалось родительским элементам. Это можно сделать с помощью метода event.stopPropagation().

/*<script>
  document.getElementById('parent').addEventListener('click', () => {
    alert('Parent clicked!');
  });

  document.getElementById('child').addEventListener('click', (event) => {
    alert('Child clicked!');
    event.stopPropagation(); // предотвращает всплытие события
  });
</script>*/

//Захват событий

//Помимо всплытия, существует другой этап обработки событий, называемый захватом (event capturing). Событие сначала идет сверху вниз от корневого элемента к цели (начиная с document и заканчивая целевым элементом), а затем поднимается обратно вверх (всплытие).

//Чтобы добавить обработчик на этапе захвата, нужно передать true в качестве третьего аргумента в addEventListener:

/*<script>
  document.getElementById('parent').addEventListener('click', () => {
    alert('Parent clicked!');
  }, true);

  document.getElementById('child').addEventListener('click', () => {
    alert('Child clicked!');
  }, true);
</script>*/


6. //SSR (Server-Side Rendering) — это технология рендеринга веб-страниц на сервере, а не на клиенте. В контексте современных JavaScript-фреймворков, таких как React или Vue.js, это означает, что HTML-код страницы генерируется на сервере и отправляется в браузер уже готовым для отображения. Это отличается от традиционного подхода клиентского рендеринга (Client-Side Rendering, CSR), где HTML генерируется непосредственно в браузере с использованием JavaScript.

//Основные особенности и преимущества

/*1️⃣Улучшение производительности и скорости загрузки:
✅Первичный контент: Поскольку HTML генерируется на сервере, браузеры могут отображать готовый контент без необходимости ждать загрузки и выполнения JavaScript.
✅SEO: Поисковые системы лучше индексируют страницы, так как весь контент доступен сразу

2️⃣Лучшая поддержка SEO:
✅Статические HTML-страницы, генерируемые сервером, легче индексируются поисковыми системами, что улучшает видимость сайта в поисковых результатах.

3️⃣Улучшенное восприятие пользователем (First Paint):
✅Пользователи видят контент быстрее, так как сервер отправляет уже готовую HTML-разметку.

Как он работает

1️⃣Запрос от клиента:
✅Браузер отправляет запрос на сервер для получения страницы.

2️⃣Генерация HTML на сервере:
✅Сервер запускает JavaScript-код для рендеринга компонента или всей страницы.
✅Сервер генерирует HTML-код и отправляет его клиенту.

3️⃣Отображение страницы в браузере:
✅Браузер получает готовую HTML-страницу и отображает её.
✅Затем JavaScript-фреймворк (например, React или Vue) «гидрирует» страницу, то есть связывает готовую HTML-разметку с JavaScript-кодом, чтобы сделать страницу интерактивной.*/



//Next.js — популярный фреймворк для React, который поддерживает SSR из коробки.

//1️⃣Установка Next.js:

//npx create-next-app my-ssr-app
//cd my-ssr-app
//npm run dev

      // pages/index.js
      /*import React from 'react';

      const Home = ({ data }) => {
        return (
          <div>
            <h1>Server-Side Rendering Example</h1>
            <p>{data.message}</p>
          </div>
        );
      };
   
      // Эта функция вызывается на сервере при каждом запросе к странице
      export async function getServerSideProps() {
        // Выполняем запрос к API или базе данных
        const res = await fetch('https://api.example.com/data');
        const data = await res.json();
   
        // Передаем данные как пропсы в компонент
        return {
          props: {
            data
          }
        };
      }
   
      export default Home;*/


      //В этом примере Next.js использует функцию getServerSideProps для получения данных на сервере перед рендерингом страницы. Эти данные затем передаются в компонент как пропсы и используются для генерации HTML.

//SSR (Server-Side Rendering) — это процесс рендеринга веб-страниц на сервере, а не в браузере. Это улучшает производительность, SEO и восприятие пользователем за счет отправки готового HTML-кода с сервера.
      
   




