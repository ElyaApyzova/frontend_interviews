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
      
   


7. //IIFE (Immediately Invoked Function Expression) — это функция, которая определяется и вызывается немедленно после ее создания. IIFE полезны по нескольким причинам:


//Основные преимущества 

//1️⃣Изоляция кода:
//Создают новую область видимости, что помогает избежать загрязнения глобального пространства имен. Это особенно полезно при работе с переменными, которые могут конфликтовать с другими частями кода.

//2️⃣Создание приватных переменных:
//Переменные, объявленные внутри IIFE, не доступны снаружи, что делает их приватными. Это помогает защитить данные и функции от нежелательного доступа или модификации.

//3️⃣Предотвращение конфликтов переменных:
//Поскольку IIFE создают собственную область видимости, переменные внутри них не конфликтуют с переменными в других частях программы.

//4️⃣Инициализация кода:
//IIFE часто используются для выполнения однократной инициализации, которая должна произойти сразу после загрузки кода

//Синтаксис IIFE

//Может быть объявлена с помощью двух основных синтаксисов:

//Анонимная функция
(function() {
  console.log('This is an IIFE');
})();


//Функция с именем

(function namedIIFE() {
  console.log('This is a named IIFE');
})();


//Изоляция переменных
var i = 10;

(function() {
  var i = 20;
  console.log(i); // 20
})();

console.log(i); // 10

//Создание приватных переменных

var counter = (function() {
  var count = 0;

  return {
    increment: function() {
      count++;
      return count;
    },
    reset: function() {
      count = 0;
    }
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
counter.reset();
console.log(counter.increment()); // 1

//Здесь переменная count является приватной и доступна только через методы increment и reset.


//Инициализация кода

(function() {
  console.log('IIFE for initialization');
  // Initialization code here
})();

//IIFE нужны для создания новой области видимости, изоляции кода, создания приватных переменных и предотвращения конфликтов переменных. Они выполняются сразу после объявления и часто используются для инициализации кода.


8. //Утилити типы (utility types) — это встроенные типы, которые помогают манипулировать другими типами и упрощают работу с ними. Они позволяют изменять, расширять, ограничивать и комбинировать типы, что делает код более гибким и безопасным. Вот некоторые из наиболее часто используемых утилити и их примеры:

//1️⃣Partial

//Делает все свойства типа T необязательными.

/*interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser = (id: number, userUpdates: Partial<User>) => {
  // Обновление пользователя
};

updateUser(1, { name: 'Alice' }); // Можно передать только часть свойств*/


//2️⃣Required

//Делает все свойства типа T обязательными.

/*
interface User {
  id?: number;
  name?: string;
  email?: string;
}

const user: Required<User> = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
}; // Все свойства должны быть указаны

*/


//3️⃣Readonly

//Делает все свойства типа T только для чтения.

/*
interface User {
  id: number;
  name: string;
  email: string;
}

const user: Readonly<User> = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};

user.id = 2;   */
// Ошибка: свойство id доступно только для чтения


//4️⃣Pick

//Создает тип с набором свойств K из типа T.

/*
interface User {
  id: number;
  name: string;
  email: string;
}

const user: Pick<User, 'id' | 'name'> = {
  id: 1,
  name: 'Alice'
}; // Только свойства id и name

*/

//5️⃣Omit

//Создает тип, исключающий свойства K из типа T.


/*
interface User {
  id: number;
  name: string;
  email: string;
}

const user: Omit<User, 'email'> = {
  id: 1,
  name: 'Alice'
}; // Все свойства, кроме email

*/


//6️⃣Record

//Создает тип объекта, ключи которого из K, а значения типа T.

/*
type Roles = 'admin' | 'user' | 'guest';

const roles: Record<Roles, string> = {
  admin: 'Admin User',
  user: 'Regular User',
  guest: 'Guest User'
};

*/

//7️⃣Exclude

//Создает тип, исключая из T те типы, которые находятся в U.

/*
type T = 'a' | 'b' | 'c';
type U = 'a';

type Result = Exclude<T, U>; // 'b' | 'c'

*/

//8️⃣Extract

//Создает тип, включающий только те типы из T, которые также находятся в U.

/*
type T = 'a' | 'b' | 'c';
type U = 'a' | 'c';

type Result = Extract<T, U>; // 'a' | 'c'

*/

//9️⃣NonNullable

//Исключает null и undefined из типа T.

/*
type T = string | number | null | undefined;

type NonNullableT = NonNullable<T>; // string | number

*/

//🔟ReturnType

//Получает тип возвращаемого значения функции T.

/*
function getUser() {
  return { id: 1, name: 'Alice' };
}

type User = ReturnType<typeof getUser>; // { id: number, name: string }

*/

//Утилити типы помогают манипулировать типами, делая их более гибкими и безопасными. Они позволяют изменять, расширять, ограничивать и комбинировать типы. Вот основные утилити типы и их примеры:


//Основные утилити 


/*

1️⃣Partial: Делает все свойства типа необязательными.
interface User {
id: number;
name: string;
email: string;
}

const updateUser = (id: number, userUpdates: Partial<User>) => {
// Обновление пользователя
};

updateUser(1, { name: 'Alice' }); // Можно передать только часть свойств


2️⃣Required: Делает все свойства типа обязательными.
interface User {
id?: number;
name?: string;
email?: string;
}

const user: Required<User> = {
id: 1,
name: 'Alice',
email: 'alice@example.com'
}; // Все свойства должны быть указаны


3️⃣Readonly: Делает все свойства типа только для чтения.
interface User {
id: number;
name: string;
email: string;
}

const user: Readonly<User> = {
id: 1,
name: 'Alice',
email: 'alice@example.com'
};

user.id = 2; // Ошибка: свойство id доступно только для чтения

*/

//Утилити типы — это встроенные типы, которые позволяют легко изменять, расширять и комбинировать другие типы. Они делают код более гибким, безопасным и удобным для поддержки



9. //call, apply и bind — это методы, которые позволяют управлять контекстом (this) функции. Они полезны для вызова функции с определённым значением this и передачи аргументов. Вот как они работают:


//1️⃣call

//Вызывает функцию с указанным значением this и аргументами, переданными по отдельности.

//Синтаксис:
//func.call(thisArg, arg1, arg2, ...);

//Пример: 

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const user = { name: 'Alice' };

greet.call(user, 'Hello', '!'); // Hello, Alice!


//2️⃣apply

//Похож на call, но аргументы передаются в виде массива.


//Синтаксис:

//func.apply(thisArg, [arg1, arg2, ...]);

//Пример:

/*

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const user = { name: 'Alice' };

greet.apply(user, ['Hello', '!']); // Hello, Alice!

*/



//3️⃣bind

//Создаёт новую функцию, которая при вызове будет иметь указанный контекст this и аргументы, переданные при создании. Он не вызывает функцию сразу, а возвращает новую функцию.


//Синтаксис:

//const boundFunction = func.bind(thisArg, arg1, arg2, ...);

//Пример:

/*

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const user = { name: 'Alice' };

const boundGreet = greet.bind(user, 'Hello');
boundGreet('!'); // Hello, Alice!

*/


//Сравнение методов

//1️⃣`call` и `apply`:
//✅Используются для немедленного вызова функции с заданным this.
//✅call принимает аргументы по отдельности.
//✅apply принимает аргументы в виде массива.

//7️⃣`bind`:
//✅Возвращает новую функцию с заданным this, которую можно вызвать позже.
//✅Полезен для создания функции с постоянным контекстом.

//Краткий ответ:

//✅`call` вызывает функцию с указанным значением this и аргументами, переданными по отдельности.
//✅`apply` вызывает функцию с указанным значением this и аргументами, переданными в виде массива.
//✅`bind` создаёт новую функцию с указанным значением this и аргументами, которую можно вызвать позже.




10. //TypeScript (TS) — это надстройка над JavaScript, добавляющая статическую типизацию и другие возможности. Он предоставляет множество преимуществ, которые делают его привлекательным для разработки крупных и сложных приложений. Вот основные плюсы TypeScript:

//1️⃣Статическая типизация

//Позволяет явно указывать типы переменных, функций и объектов, что помогает выявлять ошибки на этапе компиляции, а не во время выполнения. Это делает код более надежным и уменьшает количество багов.

//function add(a: number, b: number): number {
  //return a + b;
//}

// Ошибка на этапе компиляции, если передать нечисловые значения
// add('1', '2');


//2️⃣Улучшенная поддержка инструментов и автодополнение

//Статическая типизация и декларации типов позволяют редакторам кода (например, Visual Studio Code) предоставлять улучшенное автодополнение, подсказки и рефакторинг.

/*
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: 'Alice'
};  */

// Автодополнение будет предлагать поля 'id' и 'name' для объекта 'user'

/*

3️⃣Рефакторинг и поддержка кода

Благодаря типизации и строгим правилам, TypeScript упрощает рефакторинг кода. Вы можете безопасно переименовывать переменные, функции и классы, уверенные в том, что все использования будут обновлены.

4️⃣Совместимость с JavaScript

Является надстройкой над JavaScript, поэтому любой корректный JavaScript-код также является корректным TypeScript-кодом. Это позволяет постепенно внедрять TypeScript в существующие проекты.
// Это корректный TypeScript-код, так как он также является корректным JavaScript-кодом
const message = "Hello, TypeScript!";
console.log(message);

5️⃣Расширенные возможности OOP

Добавляет возможности объектно-ориентированного программирования (ООП) к JavaScript, такие как классы, интерфейсы, абстрактные классы и модификаторы доступа (public, private, protected).
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public speak(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.

6️⃣Система модулей

Поддерживает современные стандарты модулей (ES6 и CommonJS), что упрощает организацию и управление зависимостями в проекте.
// module.ts
export function greet(name: string): string {
  return `Hello, ${name}`;
}

// main.ts
import { greet } from './module';

console.log(greet('TypeScript'));

7️⃣Поддержка современных возможностей JavaScript

TypeScript поддерживает последние версии JavaScript и позволяет использовать новые возможности языка даже в старых браузерах благодаря транспиляции.

8️⃣Сообщество и экосистема

Имеет большое и активное сообщество, множество библиотек и инструментов. Это делает его надежным выбором для долгосрочных проектов.

TypeScript добавляет статическую типизацию, улучшает автодополнение и рефакторинг, предоставляет возможности ООП, поддерживает современные стандарты модулей и совместим с JavaScript. Это делает код более надежным, удобным в поддержке и разработке.



*/


11. // Есть несколько способов скопировать объект. Важно понимать разницу между поверхностным (shallow) и глубоким (deep) копированием. Поверхностная копия копирует только сам объект и его непосредственные свойства, в то время как глубокая копия копирует весь объект и все его вложенные объекты.


//Поверхностное копирование

//1️⃣Object.assign

//Метод Object.assign копирует все перечисляемые свойства из одного или более исходных объектов в целевой объект.


const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);
console.log(copy); // { a: 1, b: 2 }


//2️⃣Оператор расширения (spread operator)

//Оператор расширения (...) также можно использовать для создания поверхностной копии объекта.
/*
const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy); // { a: 1, b: 2 }
*/

//Глубокое копирование

//1️⃣JSON.parse и JSON.stringify

//Этот метод преобразует объект в строку JSON, а затем обратно в объект, создавая тем самым глубокую копию. Однако он имеет ограничения, такие как невозможность копирования функций и потеря undefined значений.

/*
const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));
console.log(copy); // { a: 1, b: { c: 2 } }
*/


//2️⃣Рекурсивная функция

//Можно написать свою рекурсивную функцию для глубокого копирования объекта.


function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepCopy(obj[i]);
    }
    return arrCopy;
  }

  const copies = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copies[key] = deepCopy(obj[key]);
    }
  }
  return copies;
}

const originals = { a: 1, b: { c: 2 } };
const copies = deepCopy(originals);
console.log(copies); // { a: 1, b: { c: 2 } }


//3️⃣Библиотеки для глубокого копирования

//Существуют библиотеки, такие как lodash, которые предоставляют готовые функции для глубокого копирования объектов.

/*
const _ = require('lodash');
const original = { a: 1, b: { c: 2 } };
const copy = _.cloneDeep(original);
console.log(copy); // { a: 1, b: { c: 2 } }

*/

//Для поверхностного копирования объектов можно использовать Object.assign или оператор расширения (...). Для глубокого копирования можно использовать JSON.parse и JSON.stringify, написать рекурсивную функцию или воспользоваться библиотекой, такой как lodash.



12. //Сессии и куки — это два различных способа хранения данных в веб-приложениях, и у них есть свои особенности и случаи применения. Вот основные различия между ними:

Куки (Cookies)

//1️⃣Хранение данных на клиенте:
//Куки хранятся в браузере пользователя. Это небольшие кусочки данных, которые веб-сервер отправляет браузеру, и браузер сохраняет их и отправляет обратно на сервер с каждым запросом.

//2️⃣Долговременное хранение:
//Куки могут иметь установленный срок действия и могут сохраняться на длительное время (например, несколько дней, недель или даже лет), если это явно указано при их создании.

//3️⃣Использование для идентификации:
//Куки часто используются для сохранения информации о пользователе, такой как предпочтения, идентификаторы сессий или данные для авторизации.

//4️⃣Размер и количество ограничены:
//Обычно размер одной куки ограничен 4KB, и браузеры могут ограничивать количество куки (например, до 20-30 на один домен).

//5️⃣Безопасность:
//Куки могут быть подвержены угрозам безопасности, таким как кража куки (cookie theft) или атаки с подделкой межсайтовых запросов (CSRF). Использование флага HttpOnly помогает защитить куки от доступа через JavaScript, а флаг Secure гарантирует их передачу только по HTTPS.


//Пример создания куки:
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";


/*

Сессии (Sessions)

1️⃣Хранение данных на сервере:
Данные сессии хранятся на сервере, а не в браузере пользователя. Браузер хранит только идентификатор сессии (обычно в куке), который используется для связи данных сессии с конкретным пользователем.

2️⃣Кратковременное хранение:
Сессии, как правило, предназначены для хранения данных в течение одного сеанса работы пользователя (например, до закрытия браузера или истечения времени бездействия). Данные сессии удаляются, когда сессия заканчивается.

3️⃣Использование для хранения состояния:
Сессии используются для хранения состояния пользователя между запросами, таких как состояние авторизации, содержимое корзины покупок и другие временные данные.

4️⃣Размер и масштабируемость:
Поскольку данные сессии хранятся на сервере, размер их ограничен только серверными ресурсами. Это позволяет хранить больше данных по сравнению с куки.

5️⃣Безопасность:
Сессии обычно считаются более безопасными, так как данные не передаются с каждым запросом и хранятся на сервере. Однако нужно заботиться о безопасности идентификаторов сессий, чтобы предотвратить атаки, такие как угон сессий (session hijacking).

*/


//Пример создания сессии на сервере (с использованием Express.js):

/*
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Number of views: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send('Welcome to the session demo. Refresh!');
  }
});

app.listen(3000);

*/

//✅Куки хранятся в браузере пользователя, могут быть долговременными и используются для хранения небольших данных, таких как идентификаторы и предпочтения.
//✅Сессии хранятся на сервере, обычно кратковременные и используются для хранения состояния пользователя между запросами.


13. //event.preventDefault() и event.stopPropagation() — это два метода, которые используются для управления поведением событий в JavaScript. Они выполняют разные задачи и полезны в различных сценариях.


//event.preventDefault()

//Предотвращает поведение браузера по умолчанию для события. Это может быть полезно, когда вы хотите отменить действие, которое обычно происходит при определенном событии.

Примеры:

//1️⃣Отмена отправки формы:
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Форма не отправлена!');
});

//2️⃣Отмена перехода по ссылке:
document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Переход по ссылке отменен!');
});


//event.stopPropagation()

//Предотвращает дальнейшее распространение события по дереву DOM. Это полезно, когда вы хотите остановить событие от всплытия (bubbling) или захвата (capturing) к родительским элементам.

Примеры:

//1️⃣Остановка всплытия события:
document.querySelector('.child').addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('Клик на child');
});

document.querySelector('.parent').addEventListener('click', function() {
  console.log('Клик на parent');
});

//В этом примере клик на .child элемент не вызовет обработчик клика на .parent элементе.

//event.preventDefault()`:
//✅Предотвращает действие браузера по умолчанию.
//✅Примеры: отмена отправки формы, отмена перехода по ссылке.
//event.stopPropagation()
//✅Останавливает дальнейшее распространение события по дереву DOM.
//✅Примеры: остановка всплытия события от дочернего элемента к родительскому.


14. //Оптимизация перерисовок (или "repaints" и "reflows") в веб-приложениях является важной задачей для обеспечения высокой производительности и плавности интерфейса. Вот несколько методов и стратегий, которые можно использовать для оптимизации перерисовок:


//1️⃣Минимизация количества изменений в DOM

//✅Используйте Document Fragments:
//Вместо многократного добавления элементов в DOM, добавляйте их в DocumentFragment, а затем добавьте фрагмент в DOM одним действием.


const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = `Item ${i}`;
  fragment.appendChild(div);
}
document.body.appendChild(fragment);


//✅Batch DOM updates:

//Группируйте несколько изменений DOM в одно действие. Это уменьшает количество вызовов для перерисовки.


//2️⃣Избегайте синхронных изменений стилей и компоновки

//✅CSS класс:
//Вместо изменения нескольких отдельных стилей, измените один класс.

element.style.width = '100px';
element.style.height = '100px';
element.style.backgroundColor = 'red';


//Вместо этого используйте класс:

/*

.new-style {
width: 100px;
height: 100px;
background-color: red;
}

*/


//✅Избегайте чтения свойств, вызывающих перерисовку:

//Чтение некоторых свойств, таких как offsetHeight или offsetWidth, после изменения стилей, заставляет браузер выполнять немедленную перерисовку. Избегайте таких действий.


//3️⃣Используйте CSS для анимаций

//✅CSS анимации и трансформации:
//Используйте CSS для анимаций и трансформаций, так как они могут выполняться на уровне GPU, что снижает нагрузку на основной поток

/*
.animated {
  transition: transform 0.3s;
  transform: translateX(100px);
}

*/


//4️⃣Дебаунс и троттлинг

//✅Debouncing и Throttling:
//Используйте дебаунс и троттлинг для событий, которые происходят часто (например, resize или scroll), чтобы уменьшить количество вызовов обработчиков событий.

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

window.addEventListener('resize', debounce(() => {
  console.log('Resized!');
}, 200));



//5️⃣Виртуальный DOM

//✅Использование библиотек с виртуальным DOM:
//Библиотеки, такие как React, используют виртуальный DOM, чтобы минимизировать количество изменений в реальном DOM, что значительно улучшает производительность.


//6️⃣Избегайте использования layout thrashing

//✅Layout Thrashing:
//Это происходит, когда чередуются операции записи и чтения из DOM, что вызывает множественные перерисовки.

const height = element.offsetHeight;
element.style.height =out;
  return func


  //Сгруппируйте чтения и записи отдельно:
//const height = element.offsetHeight;
//element.style.height = ${height + 10}px;


//7️⃣Избегайте глубоких вложенностей в DOM

//✅Меньше вложенностей:
//Старайтесь минимизировать глубину вложенности элементов, так как это может усложнить перерисовку и компоновку.


//8️⃣Оптимизация стилей

//✅Уменьшите количество правил и селекторов:
//Сложные CSS-селекторы могут замедлить работу браузера. Используйте более простые селекторы и старайтесь избегать вложенных правил.


//9️⃣Использование will-change

//✅will-change:
//Используйте свойство will-change, чтобы заранее сообщить браузеру о планируемых изменениях, что позволяет оптимизировать рендеринг.

/*
.will-change-transform {
  will-change: transform;
}

*/

//Для оптимизации перерисовок в веб-приложениях, минимизируйте изменения в DOM, используйте CSS для анимаций, применяйте дебаунс и троттлинг для событий, избегайте layout thrashing, уменьшайте глубину вложенностей в DOM и используйте библиотеки с виртуальным DOM. Эти методы помогают улучшить производительность и плавность интерфейса.



15. //"falsy" (ложные) значения — это значения, которые при приведении к логическому типу (Boolean) дают false. Эти значения часто используются в условиях (например, в if выражениях) для проверки истинности или ложности.


//Основные значения:

//1️⃣false:
//Само значение false является ложным.

if (false) {
  console.log('Это не выполнится');
}



//2️⃣0 и -0:
//Нулевые значения считаются ложными.

if (0) {
  console.log('Это не выполнится');
}


if (-0) {
  console.log('Это тоже не выполнится');
}


//3️⃣"" (пустая строка):
//Пустая строка считается ложной.

if ("") {
  console.log('Это не выполнится');
}


//4️⃣null:
//Значение null также является ложным.


if (null) {
  console.log('Это не выполнится');
}


//5️⃣undefined:
//Значение undefined является ложным.

if (undefined) {
  console.log('Это не выполнится');
}


//6️⃣NaN (Not-a-Number):
//Специальное значение NaN, которое обозначает нечисловое значение, считается ложным.


if (NaN) {
  console.log('Это не выполнится');
}


//Примеры

//1️⃣Условные операторы:

const value = 0;

   if (!value) {
     console.log('value является falsy'); // Это выполнится
   }

  // 2️⃣Логические операторы:

   //Логические операторы могут быть использованы для проверки на "falsy" значения.
   const val = null;
      const result = val || 'Значение по умолчанию';
      console.log(result); // 'Значение по умолчанию'


      //3️⃣Функции с параметрами по умолчанию:

//Функции могут использовать "falsy" значения для предоставления параметров по умолчанию.

function greet(name) {
  name = name || 'гость';
  console.log('Привет, ' + name);
}

greet(); // Привет, гость
greet('Алиса'); // Привет, Алиса


//"Falsy" значения — это значения, которые приводятся к false в логическом контексте. Основные "falsy" значения: false, 0, -0, "", null, undefined, NaN. Эти значения часто используются в условиях для проверки их истинности или ложности.
      

16. //Promise.all — это метод, который позволяет обрабатывать несколько промисов одновременно и возвращает один промис, который завершится, когда все переданные промисы будут выполнены (или когда один из них будет отклонен).


//Основные особенности:

//1️⃣Параллельное выполнение промисов:
//Promise.all принимает массив промисов и выполняет их параллельно. Он завершится успешно, когда все промисы в массиве будут выполнены.

//2️⃣Возвращает один промис:
//Метод возвращает один промис, который:
//✅Выполняется с массивом результатов, если все промисы в массиве были успешно выполнены.
//✅Отклоняется с причиной отклонения первого промиса, который был отклонен.

//3️⃣Отклонение при первой ошибке:
//Если один из промисов в массиве отклоняется, Promise.all сразу отклоняет весь промис, не дожидаясь выполнения остальных.


//Синтаксис
Promise.all(iterable);

//✅iterable: Массив или другой итерируемый объект, элементы которого являются промисами или значениями.

//Рассмотрим пример, где мы запускаем несколько асинхронных операций одновременно и ждем их завершения.


const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Second'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 300, 'Third'));

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // ['First', 'Second', 'Third']
  })
  .catch((error) => {
    console.error('One of the promises failed:', error);
  });


  //Если один из промисов отклоняется, Promise.all отклоняет весь результат.

  const promiseone = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
const promisetwo = new Promise((resolve, reject) => setTimeout(reject, 200, 'Error in Second'));
const promisethree = new Promise((resolve) => setTimeout(resolve, 300, 'Third'));

Promise.all([promiseone, promisetwo, promisethree])
  .then((results) => {
    console.log(results); // This line will not be executed
  })
  .catch((error) => {
    console.error('One of the promises failed:', error); // 'Error in Second'
  });


  //Promise.all также можно использовать с async/await для более удобной работы с асинхронным кодом.

  const promisefirst = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
const promisesecond = new Promise((resolve) => setTimeout(resolve, 200, 'Second'));
const promisethird = new Promise((resolve) => setTimeout(resolve, 300, 'Third'));

async function runPromises() {
  try {
    const results = await Promise.all([promisefirst, promisesecond, promisethird]);
    console.log(results); // ['First', 'Second', 'Third']
  } catch (error) {
    console.error('One of the promises failed:', error);
  }
}

runPromises();


//Promise.all принимает массив промисов и возвращает один промис, который выполняется, когда все промисы в массиве выполнены успешно, или отклоняется, если любой из промисов отклонен. Он позволяет обрабатывать несколько асинхронных операций параллельно и возвращает массив результатов всех промисов.


17. 

//Объекты и Map используются для хранения пар ключ-значение. Однако, у них есть различия, которые могут сделать Map более подходящим для определенных задач по сравнению с обычными объектами. Вот основные отличия:


//1️⃣Типы ключей

//✅Объекты: Ключами могут быть только строки или символы. Другие типы, такие как числа или объекты, автоматически преобразуются в строки.


const obj = {};
obj[1] = 'one'; // Ключ преобразуется в строку '1'
console.log(obj['1']); // 'one'

const a = { key: 'a' };
const b = { key: 'b' };
obj[a] = 'value'; // Ключ преобразуется в '[object Object]'
console.log(obj['[object Object]']); // 'value'



//✅Map: Ключами могут быть любые значения, включая объекты, функции и примитивы.

const map = new Map();
map.set(1, 'one');
console.log(map.get(1)); // 'one'

const A = { key: 'A' };
const B = { key: 'B' };
map.set(A, 'valueA');
map.set(B, 'valueB');
console.log(map.get(A)); // 'valueA'
console.log(map.get(B)); // 'valueB'


//2️⃣Итерация

//✅Объекты: Осуществляется с помощью циклов for...in или методов Object.keys(), Object.values() и Object.entries().


const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
}

Object.keys(obj).forEach(key => console.log(key, obj[key]));

//✅Map: Имеет встроенные методы для итерации, такие как map.keys(), map.values() и map.entries(). Эти методы возвращают итерируемые объекты.

const map2 = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map2) {
  console.log(key, value);
}

map.forEach((value, key) => console.log(key, value));


//3️⃣Сохранение порядка

//✅Объекты: Порядок свойств в объектах не гарантирован, хотя современные реализации JavaScript сохраняют порядок добавления свойств.

//✅Map: Порядок добавления пар ключ-значение всегда сохраняется.


//4️⃣Производительность

//✅Объекты: Использование объектов может быть быстрее для создания и доступа к свойствам, но это зависит от реализации в конкретной среде выполнения.

//✅Map: Map оптимизирован для частого добавления и удаления ключей и значений.


//5️⃣Методы и свойства

//✅Объекты: Не имеют встроенных методов для работы с коллекцией ключей и значений.


//✅Map: Предоставляет множество встроенных методов, таких как set, get, has, delete, и свойства, такие как size.


const map3 = new Map();
map.set('key', 'value');
console.log(map.has('key')); // true
console.log(map.get('key')); // 'value'
map.delete('key');
console.log(map3.size); // 0


//6️⃣Прототипное наследование

//✅Объекты: Имеют цепочку прототипов, которая может приводить к коллизиям имен свойств с прототипами.


const obj = { a: 1 };
console.log(obj.toString); // [Function: toString] - свойство унаследовано от Object.prototype


//✅Map: В Map нет такой проблемы, так как он не использует цепочку прототипов для хранения данных.


const map4 = new Map();
map.set('a', 1);
console.log(map4.toString); // [Function: toString] - метод самого Map, а не его данных


//✅Объекты используют строки и символы как ключи, их итерация может быть менее удобной, и они могут сталкиваться с проблемами прототипного наследования.
//✅Map поддерживает любые типы ключей, сохраняет порядок вставки, предоставляет удобные методы для работы с коллекцией и оптимизирован для частых операций добавления и удаления.



18. //TypeScript (TS) — это язык с открытым исходным кодом, разработанный и поддерживаемый Microsoft. Является строгой надстройкой над JavaScript, которая добавляет статическую типизацию и другие возможности, упрощая разработку больших и сложных приложений.


//Основные особенности

//1️⃣Статическая типизация:
//Позволяет указывать типы переменных, параметров функций и возвращаемых значений. Это помогает выявлять ошибки на этапе компиляции, а не во время выполнения, что делает код более надежным и упрощает отладку

/*
let age: number = 25;
let name: string = "Alice";

function greet(name: string): string {
  return `Hello, ${name}`;
}

*/

//2️⃣Совместимость:
//TypeScript полностью совместим. Любой корректный JavaScript-код также является корректным TypeScript-кодом. Это позволяет постепенно внедрять TypeScript в существующие проекты.


//3️⃣Поддержка современных возможностей:
//Поддерживает все современные стандарты JavaScript (ES6 и выше), а также предоставляет дополнительные возможности, такие как декораторы и асинхронные функции.


//4️⃣Расширенные возможности ООП (объектно-ориентированного программирования):
//Добавляет возможности, такие как классы, интерфейсы, абстрактные классы и модификаторы доступа (public, private, protected).

/*


class Person {
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice

*/

//5️⃣Типы данных и интерфейсы:
//TypeScript позволяет определять собственные типы и интерфейсы, что делает код более выразительным и понятным.

/*
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

*/


//6️⃣Инструменты разработки:
//Благодаря статической типизации и метаданным, TypeScript обеспечивает улучшенное автодополнение, рефакторинг и навигацию по коду в популярных редакторах кода, таких как Visual Studio Code.


//7️⃣Компиляция:
//Компилируется (или транслируется) в JavaScript. Это означает, что код TypeScript преобразуется в JavaScript, который затем может выполняться в любом браузере или среде выполнения JavaScript.

/*


      // TypeScript
      let message: string = "Hello, TypeScript";

      // Компилированный JavaScript
      var message = "Hello, TypeScript";
      
   */


      //Создание простого проекта может включать следующие шаги:

//1️⃣Установка TypeScript:
      //npm install -g typescript


      //2️⃣Инициализация проекта TypeScript:
      //tsc --init

//Это создаст файл tsconfig.json, в котором можно настроить параметры компиляции TypeScript.


//3️⃣Создание TypeScript-файла:
      // src/index.ts

      /*
      const greet = (name: string): string => {
        return Hello, ${name};
      };
   
      console.log(greet("TypeScript"));

   */

      //4️⃣Компиляция TypeScript в JavaScript:
      tsc

//Это создаст файл index.js в папке dist или другой указанной папке.


//5️⃣Запуск скомпилированного JavaScript-кода:
//node dist/index.js


//TypeScript — он является строгой надстройкой над JavaScript. Он добавляет статическую типизацию, улучшенные возможности ООП, поддержку современных стандартов JavaScript и улучшенные инструменты разработки. TypeScript компилируется в JavaScript, что позволяет использовать его в любых средах выполнения JavaScript.


19. 
   
//Map и Set — это структуры данных, введенные в ECMAScript 6 (ES6), которые предоставляют дополнительные возможности и более гибкую работу с коллекциями данных по сравнению с традиционными объектами и массивами. Вот основные особенности и случаи их использования:


//Map 

//Это структура данных, которая позволяет хранить пары ключ-значение и поддерживает любые типы данных в качестве ключей.


//Основные особенности:

//1️⃣Любые типы ключей:
//В ней ключами могут быть любые значения, включая объекты, функции и примитивы. Это отличает Map от объектов, где ключи могут быть только строками или символами.

/*

const map = new Map();
map.set('a', 1);
map.set(1, 'one');
map.set({}, 'object');
map.set(function() {}, 'function');
console.log(map);

*/

//2️⃣Сохранение порядка:
//Сохраняет порядок вставки элементов, что позволяет итерировать по элементам в порядке их добавления.

//3️⃣Итерируемость:
//Имеет встроенные методы для итерации, такие как map.keys(), map.values(), и map.entries(), что упрощает работу с коллекцией данных.


//4️⃣Методы и свойства:
//✅set(key, value): Добавляет новую пару ключ-значение в Map.
//✅get(key): Возвращает значение, соответствующее ключу.
//✅has(key): Возвращает true, если ключ присутствует в Map.
//✅delete(key): Удаляет пару ключ-значение по ключу.
//✅clear(): Очищает Map.
//✅size: Возвращает количество элементов в Map.


/*


const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);

console.log(map.get('name')); // Alice
console.log(map.has('age')); // true
console.log(map.size); // 2

for (const [key, value] of map) {
  console.log(key, value);
}
// name Alice
// age 25

*/


//Set

//Это структура данных, которая хранит уникальные значения. В Set каждое значение может присутствовать только один раз.

//Основные особенности:

//1️⃣Только уникальные значения:
//Set автоматически удаляет дубликаты значений, что позволяет легко создавать коллекции уникальных элементов.

//2️⃣Итерируемость:
//Set поддерживает итерацию и имеет встроенные методы для работы с коллекцией данных.


//3️⃣Методы и свойства:
//✅add(value): Добавляет новое значение в Set.
//✅has(value): Возвращает true, если значение присутствует в Set.
//✅delete(value): Удаляет значение из Set.
//✅clear(): Очищает Set.
//✅size: Возвращает количество элементов в Set.


const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Дубликат не добавится
set.add(3);

console.log(set.has(2)); // true
console.log(set.size); // 3

for (const value of set) {
  console.log(value);
}
// 1
// 2
// 3


//Сравнение с традиционными структурами данных

//Объекты и массивы:
//✅Объекты используются для хранения пар ключ-значение, но ключи могут быть только строками или символами.
//✅Массивы используются для хранения упорядоченных коллекций элементов, но они не гарантируют уникальность значений.

//Map и Set:
//✅Map предоставляет более гибкую работу с парами ключ-значение, поддерживая любые типы данных в качестве ключей и сохраняя порядок вставки.
//✅Set предоставляет коллекцию уникальных значений и автоматически удаляет дубликаты.



20. 

//useEffect и useLayoutEffect — это хуки, которые позволяют выполнять побочные эффекты в функциональных компонентах. Оба они предназначены для выполнения кода после рендеринга компонента, но их поведение различается по времени выполнения и влиянию на рендеринг.


//useEffect

//✅Когда выполняется:
//Выполняется после того, как браузер закончил обновлять DOM. Это означает, что все изменения в DOM уже произошли, и браузер уже отрисовал интерфейс.

//✅Основное использование:
//Используется для выполнения побочных эффектов, которые не блокируют отрисовку, таких как сетевые запросы, подписки на события, манипуляции с DOM (не критичные к рендерингу) и регистрация таймеров.

//✅Поведение:
//Не блокирует рендеринг. Это означает, что пользователь может видеть обновленный интерфейс перед выполнением побочного эффекта.



import React, { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect: Выполняется после рендеринга');
    document.title = `Вы нажали ${count} раз`;

    return () => {
      console.log('useEffect: Очистка');
    };
  }, [count]);

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми меня</button>
    </div>
  );
}

//export default Example;


//useLayoutEffect



//✅Когда выполняется:
//Выполняется синхронно после всех мутировавших эффектов DOM, но перед тем, как браузер обновит экран. Это означает, что изменения, сделанные в useLayoutEffect, будут видны пользователю до того, как браузер нарисует обновленный интерфейс.

//✅Основное использование:
//Используется для выполнения побочных эффектов, которые должны произойти до отрисовки интерфейса, таких как измерение размеров DOM-элементов, выполнение синхронных изменений в DOM, которые должны произойти перед отрисовкой, или выполнение операций, которые блокируют отрисовку.

//✅Поведение:
//Блокирует отрисовку до тех пор, пока эффект не будет выполнен. Это может привести к задержке в отображении интерфейса, если эффект выполняется долго.


/*

import React, { useLayoutEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log('useLayoutEffect: Выполняется после рендеринга, но перед отрисовкой');
    document.title =раз</p>
      <button onCl

    return () => {
      console.log('useLayoutEffect: Очистка');
    };
  }, [count]);

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми меня</button>
    </div>
  );
}

export default Example;


*/

//Основные различия

//1️⃣Время выполнения:
//✅useEffect выполняется асинхронно после того, как браузер обновил экран.
//✅useLayoutEffect выполняется синхронно перед тем, как браузер обновит экран.

//2️⃣Использование:
//✅useEffect лучше подходит для побочных эффектов, которые не влияют на компоновку и отрисовку интерфейса.
//✅useLayoutEffect лучше подходит для побочных эффектов, которые должны быть выполнены перед отрисовкой, таких как измерение или изменения в DOM.

   
   

21. // Специфичность (specificity) — это механизм, который браузеры используют для определения приоритета применяемых стилей. Специфичность определяет, какие правила CSS будут применены к элементу, когда существуют конфликтующие правила. Она рассчитывается на основе различных типов селекторов, используемых в правиле CSS.


//Основные концепции

//1️⃣Типы селекторов и их веса:
//Специфичность определяется по типу селекторов, и каждый тип имеет свой вес. В порядке увеличения специфичности:

//✅Элементы и псевдоэлементы (div, h1, p, ::before, ::after): вес 1.
//✅Классы, атрибуты и псевдоклассы (.class, [type="text"], :hover, :nth-child): вес 10.
//✅Идентификаторы (#id): вес 100.
//✅Инлайновые стили (стили, заданные непосредственно в элементе с атрибутом style): вес 1000.
//✅Важные правила (!important): не учитывают специфичность, а просто переопределяют другие правила.


//2️⃣Правила вычисления специфичности:
//Специфичность CSS выражается в виде чисел (a, b, c, d), где:
//✅a — количество инлайновых стилей (1 или 0).
//✅b — количество идентификаторов.
//✅c — количество классов, атрибутов и псевдоклассов.
//✅d — количество элементов и псевдоэлементов.


//Примеры расчета специфичности

//1️⃣Элементы и псевдоэлементы:
`
      div { color: red; } /* Специфичность: 0, 0, 0, 1 */
   p::before { content: ''; } /* Специфичность: 0, 0, 0, 2 */
   `
   

//2️⃣Классы, атрибуты и псевдоклассы:
`
      .example { color: blue; } /* Специфичность: 0, 0, 1, 0 */
   [type="text"] { color: green; } /* Специфичность: 0, 0, 1, 0 */
   :hover { color: yellow; } /* Специфичность: 0, 0, 1, 0 */
   `

//3️⃣Идентификаторы:
`
      #unique { color: orange; } /* Специфичность: 0, 1, 0, 0 */
   
`
//4️⃣Инлайновые стили:
`
      <div style="color: purple;"></div> <!-- Специфичность: 1, 0, 0, 0 -->
   `

//5️⃣Комбинированные селекторы:
`
#unique .example:hover { color: pink; } /* Специфичность: 0, 1, 1, 1 */
  `
  
  `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Specificity Example</title>
  <style>
    p { color: red; } /* Специфичность: 0, 0, 0, 1 */
    .text { color: green; } /* Специфичность: 0, 0, 1, 0 */
    #unique { color: blue; } /* Специфичность: 0, 1, 0, 0 */
    .text#unique { color: orange; } /* Специфичность: 0, 1, 1, 0 */
  </style>
</head>
<body>
  <p class="text" id="unique">This is a paragraph.</p>
</body>
</html>

  `


  //В этом примере, текст параграфа будет оранжевого цвета, так как правило .text#unique имеет наибольшую специфичность (0, 1, 1, 0).


 // Использование !important

//Правила с ним имеют наивысший приоритет и могут переопределить даже те стили, которые имеют более высокую специфичность. Тем не менее, злоупотребление !important может затруднить управление стилями и отладку.
`p { color: red !important; } ` /* Перебивает все другие правила */

//Специфичность пределяет приоритет применяемых стилей на основе типов селекторов и их веса. Она используется браузером для разрешения конфликтов между различными правилами CSS, чтобы определить, какие стили применяются к элементу.



22. //Преобразование типов — это процесс приведения значения из одного типа в другой. JavaScript, как язык с динамической типизацией, автоматически преобразует типы значений, когда это необходимо, но также позволяет разработчикам явно выполнять преобразования типов.


//Виды преобразования

//1️⃣Неявное (автоматическое):
//Это преобразование, которое происходит автоматически при выполнении операций с разными типами данных. Например, при сложении числа и строки JavaScript автоматически преобразует число в строку.

//2️⃣Явное:
//Это преобразование, которое выполняется разработчиком явно с использованием встроенных функций или операторов.

//Примеры неявного

//1️⃣Строковое преобразование:
//При конкатенации строки с числом число автоматически преобразуется в строку.

const Result = 'The answer is ' + 42;
console.log(Result); // 'The answer is 42'


//2️⃣Числовое преобразование:
//При выполнении арифметических операций строка, содержащая число, автоматически преобразуется в число.


const result1 = '42' - 10;
console.log(result1); // 32


//3️⃣Логическое преобразование:
//В логическом контексте (например, в условиях if) значения автоматически приводятся к логическому типу (true или false).


if ('hello') {
  console.log('This is true'); // This is true
}

if (0) {
  console.log('This is false'); // This will not be executed
}



//Примеры явного

//1️⃣Преобразование в строку:
//Для явного преобразования в строку можно использовать метод String() или оператор + с пустой строкой.

const num = 42;
const str1 = String(num);
const str2 = num + '';

console.log(str1); // '42'
console.log(str2); // '42'


//2️⃣Преобразование в число:
//Для явного преобразования в число можно использовать функции Number(), parseInt(), или parseFloat().

const str = '42';
const num1 = Number(str);
const num2 = parseInt(str, 10);
const num3 = parseFloat(str);

console.log(num1); // 42
console.log(num2); // 42
console.log(num3); // 42



//3️⃣Преобразование в логическое значение:
//Для явного преобразования в логическое значение можно использовать функцию Boolean() или двойное отрицание !!.


const value1 = 0;
const bool1 = Boolean(value);
const bool2 = !!value1;

console.log(bool1); // false
console.log(bool2); // false

`
Таблица преобразования типов

| Значение          | К строке          | К числу          | К логическому   |
|-------------------|-------------------|------------------|-----------------|
| undefined       | 'undefined'     | NaN            | false         |
| null            | 'null'          | 0              | false         |
| true            | 'true'          | 1              | true          |
| false           | 'false'         | 0              | false         |
| 42              | '42'            | 42             | true          |
| 0               | '0'             | 0              | false         |
| '' (пустая строка) | ''          | 0              | false         |
| '42'            | '42'            | 42             | true          |
| 'hello'         | 'hello'         | NaN            | true          |
| {} (пустой объект) | '[object Object]' | NaN        | true          |
| [] (пустой массив) | ''          | 0              | true          |
| [42]            | '42'            | 42             | true          |
| [1, 2, 3]       | '1,2,3'         | NaN            | true          |

`

//Преобразование типов — это процесс приведения значения из одного типа в другой. Оно может происходить автоматически (неявное преобразование) или выполняться разработчиком явно (явное преобразование). Предоставляет функции и методы для преобразования в строки, числа и логические значения.


23. 

//CSS расшифровывается как Cascading Style Sheets, что в переводе означает "каскадные таблицы стилей". Давайте рассмотрим каждый элемент этого термина:

//1️⃣Cascading (каскадные):
Э//тот термин указывает на то, что стили применяются к элементам HTML в определенном порядке приоритетов. Когда стили конфликтуют (например, когда одно и то же свойство задано несколькими стилями), CSS использует каскадные правила для разрешения этих конфликтов. Эти правила включают:
//✅Специфичность селекторов (различные типы селекторов имеют разный приоритет).
//✅Порядок расположения в коде (последний стиль имеет больший приоритет).
//✅Использование ключевого слова !important (приоритет выше всех обычных правил).


//2️⃣Style (стили):
//Стили определяют, как должны выглядеть элементы HTML на веб-странице. Это включает в себя множество свойств, таких как цвета, шрифты, размеры, расположение, отступы и многие другие аспекты внешнего вида.


//3️⃣Sheets (таблицы):
//CSS-правила обычно хранятся в файлах, которые называются таблицами стилей. Эти файлы могут быть внешними (подключенными к HTML-документу через элемент <link>), встроенными (внутри элемента <style> в самом HTML-документе) или инлайновыми (непосредственно в атрибутах стиля HTML-элементов).


//CSS расшифровывается как Cascading Style Sheets, что означает "каскадные таблицы стилей". Это язык, используемый для описания внешнего вида и форматирования HTML-документов, поддерживающий каскадные правила для разрешения конфликтов между стилями.


24.  

//Существует несколько типов функций, каждая из которых имеет свои особенности и области применения. Вот основные виды функций:


//1️⃣Функциональные выражения и объявленные функции

//Объявленные функции (Function Declaration)

//Объявленные с использованием ключевого слова function, идущего перед именем функции. Эти функции "всплывают" (hoisted), что означает, что они могут быть вызваны до их определения в коде.
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Hello, Alice!

//Функциональные выражения (Function Expression)

//Не "всплывают" и не могут быть вызваны до их определения.
const greet = function(name) {
  returned 
};

console.log(greet('Bob')); // Hello, Bob!


//2️⃣Стрелочные функции (Arrow Functions)

//Это сокращенный синтаксис для создания функций, введенный в ES6. Они не имеют собственного контекста this и не могут быть использованы в качестве методов или конструктора.
`
const greet = (name) => Hello, ${name}!;

console.log(greet('Charlie')); // Hello, Charlie!

`

//3️⃣Анонимные функции

//Часто используются в качестве аргументов для других функций или для создания замыканий.
setTimeout(function() {
  console.log('This will run after 1 second');
}, 1000);


//4️⃣Функции-конструкторы

//Для создания объектов. Они вызываются с ключевым словом new и обычно имеют заглавную букву в названии.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const alice = new Person('Alice', 30);
console.log(alice.name); // Alice


//5️⃣Методы объекта

//Являются свойствами объекта.
`
const person = {
  name: 'Alice',
  greet: function() {
    return Hello, my name is ${this.name};
  }
};

console.log(person.greet()); // Hello, my name is Alice

`


//6️⃣Генераторы (Generators)

//Могут быть приостановлены и возобновлены в любой момент. Они объявляются с помощью function* и используют ключевое слово yield.
function* generatorFunction() {
  yield 'First';
  yield 'Second';
  yield 'Third';
}

const gen = generatorFunction();
console.log(gen.next().value); // First
console.log(gen.next().value); // Second
console.log(gen.next().value); // Third


//7️⃣Асинхронные функции (Async/Await)

//Возвращают промис и позволяют использовать синтаксис await для упрощения работы с асинхронным кодом.
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData().then(data => console.log(data));


//8️⃣Функции обратного вызова (Callbacks)

//Передаваемые в качестве аргументов в другие функции и вызываемые позже.
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'Alice' };
    callback(data);
  }, 1000);
}

fetchData(function(data) {
  console.log(data); // { name: 'Alice' }
});


//Есть несколько типов функций, включая объявленные функции, функциональные выражения, стрелочные функции, анонимные функции, функции-конструкторы, методы объекта, генераторы, асинхронные функции и функции обратного вызова. Каждый тип функций имеет свои особенности и области применения.


25.  //Что такое репозиторий ?

//Репозиторий в контексте разработки ПО — это хранилище, в котором сохраняется исходный код проекта и вся связанная с ним информация. Репозитории используются для управления версиями кода, совместной работы над проектами и отслеживания изменений. Репозитории могут находиться как локально на компьютере разработчика, так и удаленно на сервере или в облачном сервисе.


//Основные типы

//1️⃣Локальные:
//✅Хранятся на локальной машине разработчика.
//✅Используются для разработки и тестирования кода до его отправки в удаленный репозиторий.


//2️⃣Удаленные:
//✅Хранятся на удаленных серверах или в облачных сервисах.
//✅Обеспечивают совместную работу нескольких разработчиков, доступность и резервное копирование кода.
//✅Примеры: GitHub, GitLab, Bitbucket.


//Основные функции

//1️⃣Управление версиями:
//✅Отслеживание всех изменений в коде с помощью системы контроля версий (например, Git).
//✅Позволяет вернуться к любой предыдущей версии кода, сравнивать изменения и анализировать историю.


//2️⃣Совместная работа:
//✅Обеспечивает возможность совместной работы над проектом, слияния изменений от разных разработчиков и разрешения конфликтов.
//✅Поддерживает рабочие процессы, такие как ветвление (branching) и слияние (merging).


//3️⃣Резервное копирование и безопасность:
//✅Хранение кода в удаленных репозиториях обеспечивает его сохранность и доступность.
//✅Поддерживает механизмы контроля доступа для защиты кода от несанкционированного доступа.


//Основные команды для работы

//1️⃣Создание репозитория:
//✅Локальный репозиторий: git init
//✅Клонирование удаленного репозитория: git clone <url>

//2️⃣Отслеживание и фиксация изменений:
//✅Добавление изменений в индекс: git add <file>
//✅Фиксация изменений: git commit -m "Сообщение коммита"

//3️⃣Работа с ветками:
//✅Создание новой ветки: git branch <branch-name>
//✅Переключение на другую ветку: git checkout <branch-name>
//✅Создание и переключение на новую ветку: git checkout -b <branch-name>

//4️⃣Слияние изменений:
//✅Слияние ветки в текущую ветку: git merge <branch-name>

//5️⃣Работа с удаленными репозиториями:
//✅Добавление удаленного репозитория: git remote add origin <url>
//✅Отправка изменений в удаленный репозиторий: git push origin <branch-name>
//✅Получение изменений из удаленного репозитория: git pull origin <branch-name>

`
Пример

1️⃣Создание локального репозитория:
      mkdir my-project
   cd my-project
   git init
   

2️⃣Добавление файла и фиксация изменений:
      echo "# My Project" > README.md
   git add README.md
   git commit -m "Initial commit"
   

3️⃣Подключение к удаленному репозиторию на GitHub:
      git remote add origin https://github.com/username/my-project.git
   git push -u origin master
   

4️⃣Создание новой ветки и работа в ней:
      git checkout -b new-feature
   echo "New feature" > feature.txt
   git add feature.txt
   git commit -m "Add new feature"
   git push origin new-feature
   
   `


   //Репозиторий — это хранилище кода и связанных данных проекта, используемое для управления версиями и совместной работы. Он может быть локальным или удаленным. Позволяют отслеживать изменения, работать с ветками, сливать изменения и обеспечивать резервное копирование кода.


   26.  //Откуда берется контекст функции ?


   //Контекст функции — это значение, которое доступно через ключевое слово this. Контекст функции определяется способом ее вызова, а не тем, где функция была определена. Вот основные способы, которыми определяется контекст функции:


   //1️⃣Глобальный контекст и контекст функций

//✅Глобальный контекст:
//В глобальной области видимости this ссылается на глобальный объект. В браузере это объект window.
    console.log(this); // В браузере это будет window
  

//✅Контекст функции:
//При обычном вызове функции this ссылается на глобальный объект (в строгом режиме — undefined).
    function showThis() {
    console.log(this);
  }

  showThis(); // В браузере это будет window (или undefined в строгом режиме)


  //2️⃣Контекст методов объекта

//Когда функция вызывается как метод объекта, this ссылается на объект, которому принадлежит метод.
const obj = {
  name: 'Alice',
  showThis: function() {
    console.log(this);
  }
};

obj.showThis(); // { name: 'Alice', showThis: [Function: showThis] }


//3️⃣Конструкторы и классы

//При вызове функции-конструктора с ключевым словом new, this ссылается на новый созданный объект.
function Person(name) {
  this.name = name;
}

const Alice = new Person('Alice');
console.log(Alice.name); // Alice


//4️⃣call, apply и bind

//Эти методы позволяют явно устанавливать контекст this при вызове функции.

//✅call: вызывает функцию с указанным значением this и аргументами, переданными по отдельности.
    function showThis() {
    console.log(this);
  }

  const obj = { name: 'Alice' };
  showThis.call(obj); // { name: 'Alice' }


  //✅apply: вызывает функцию с указанным значением this и аргументами, переданными в виде массива.
showThis.apply(obj); // { name: 'Alice' }


//✅bind: возвращает новую функцию, которая при вызове будет иметь указанный контекст this.
const boundShowThis = showThis.bind(obj);
boundShowThis(); // { name: 'Alice' }


//5️⃣Стрелочные функции

//Не имеют собственного контекста this. Вместо этого они захватывают this из окружающего лексического контекста.
const obj = {
  name: 'Alice',
  showThis: function() {
    const arrowFunc = () => console.log(this);
    arrowFunc();
  }
};

obj.showThis(); // { name: 'Alice' }


//6️⃣Обработчики событий

//В обработчиках событий this ссылается на элемент, к которому прикреплен обработчик.
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // <button> элемент
});


//Контекст функции (this) определяется способом вызова функции. В глобальной области видимости this ссылается на глобальный объект. В методах объекта this ссылается на сам объект. В функциях-конструкторах this ссылается на новый созданный объект. Методы call, apply и bind позволяют явно задавать значение this. Стрелочные функции захватывают this из окружающего контекста. В обработчиках событий this ссылается на элемент, к которому прикреплен обработчик.


27. //Почему важно указывать ширину и высоту для картинок ?



//Указание ширины и высоты для изображений в HTML имеет несколько важных преимуществ, которые влияют на производительность, рендеринг и пользовательский опыт:


//1️⃣Улучшение производительности и оптимизация рендеринга

//✅Предотвращение перерисовок и переформатирования (reflows):
//Когда браузер загружает страницу, он сначала строит DOM (Document Object Model) и CSSOM (CSS Object Model). Если размеры изображений не указаны, браузеру приходится ждать, пока изображения загрузятся, чтобы узнать их размеры. Это может вызвать переформатирование страницы, когда элементы перемещаются, чтобы освободить место для изображений. Указание размеров заранее позволяет браузеру зарезервировать нужное пространство, избегая дополнительных перерисовок и улучшая производительность.


//2️⃣Улучшение пользовательского опыта

//✅Стабильная компоновка (layout stability):
//Когда размеры изображений указаны, браузер может зарезервировать пространство для каждого изображения до его загрузки. Это предотвращает смещение контента во время загрузки страницы, обеспечивая более плавный и предсказуемый пользовательский опыт.


//3️⃣Быстрая загрузка страниц

//✅Эффективное использование сетевых ресурсов:
//Знание точных размеров изображений позволяет браузеру более эффективно обрабатывать загрузку и отображение контента, уменьшая задержки и улучшая общую производительность страницы.


//4️⃣Сокращение времени до первого отрисовки (First Contentful Paint, FCP)

//✅Оптимизация рендеринга:
//Когда браузер знает размеры изображений, он может быстрее отрисовать контент страницы, даже если изображения еще не загружены. Это сокращает время до первого отрисовки (FCP), что является важным показателем производительности.



//Указание ширины и высоты для изображений в HTML улучшает производительность и пользовательский опыт. Оно позволяет браузеру зарезервировать пространство для изображений, предотвращает переформатирование страницы и смещение контента, ускоряет рендеринг и снижает время до первого отрисовки.


28. //Как сравнить объекты в js ?


//Сравнение объектов требует особого внимания, поскольку объекты являются ссылочными типами данных. Это значит, что при сравнении объектов вы фактически сравниваете их ссылки в памяти, а не их содержимое. Вот несколько способов сравнения объектов:


//1️⃣Сравнение ссылок на объекты

//При сравнении объектов с использованием оператора равенства (== или ===), сравниваются их ссылки, а не содержимое.
const objOne = { a: 1 };
const objTwo = { a: 1 };
const objThree = objOne;

console.log(objOne === objTwo); // false
console.log(objOne === objThree); // true


//2️⃣Глубокое сравнение объектов

//Для сравнения содержимого объектов необходимо проверять каждое свойство. Один из способов — написать рекурсивную функцию для глубокого сравнения.


function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (obj1 == null || typeof obj1 !== 'object' ||
      obj2 == null || typeof obj2 !== 'object') {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false



//3️⃣Использование библиотек

//Существуют библиотеки, которые предоставляют функции для глубокого сравнения объектов, например, lodash или deep-equal.

`
const _ = require('lodash');

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(_.isEqual(obj1, obj2)); // true
console.log(_.isEqual(obj1, obj3)); // false

`


//4️⃣Проверка свойств с учетом порядка и типов

//Для простых случаев можно использовать сериализацию объектов с помощью JSON.stringify, однако этот метод имеет ограничения и может не работать с более сложными структурами (например, с функциями, undefined, или символами).


`
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
console.log(JSON.stringify(obj1) === JSON.stringify(obj3)); // false

`

//Для сравнения объектов можно использовать:
//✅Сравнение ссылок с ===, если нужно проверить, указывают ли переменные на один и тот же объект.
//✅Глубокое сравнение с помощью рекурсивной функции или библиотек (например, lodash), чтобы проверить равенство содержимого объектов.
//✅Сериализация с JSON.stringify для простых случаев, хотя этот метод имеет ограничения и может не работать с более сложными структурами.


29. // Когда используются переменные, var, let, const ?


//Переменные объявляются с помощью ключевых слов var, let и const. Они имеют разные особенности и используются в разных ситуациях.


//var

//Использовался до появления ES6 (ECMAScript 2015) и обладает следующими особенностями:
//1️⃣Область видимости: var имеет функциональную область видимости, то есть она видна внутри функции, где была объявлена, или в глобальной области, если объявлена вне функций.
//2️⃣Поднятие (hoisting): Объявления с var поднимаются вверх своей области видимости, но присвоение значения происходит в том месте, где оно записано. Это значит, что переменную можно использовать до ее объявления.
//3️⃣Повторное объявление: Переменные, объявленные с var, могут быть переобъявлены в пределах одной и той же области видимости.

//Пример:
function exampleVar() {
  console.log(x); // undefined
  var x = 10;
  console.log(x); // 10
}
exampleVar();



//let

//Появился в ES6 и решает многие проблемы, связанные с var:
//1️⃣Область видимости: let имеет блочную область видимости, то есть виден только внутри блока {}, в котором объявлен.
//2️⃣Поднятие (hoisting): Хотя объявления с let поднимаются, доступ к ним возможен только после строки, где они объявлены (временная мертвая зона).
//3️⃣Повторное объявление: Нельзя переобъявить переменную, объявленную с let, в той же области видимости.

//Пример:
function exampleLet() {
  console.log(y); // ReferenceError: y is not defined
  let y = 10;
  console.log(y); // 10
}
exampleLet();


//const

//Также введённый в ES6, используется для объявления констант:
//1️⃣Область видимости: Как и let, имеет блочную область видимости.
//2️⃣Поднятие (hoisting): Ведет себя аналогично let в плане поднятия и временной мертвой зоны.
//3️⃣Изменение значения: Переменная, объявленная с const, должна быть инициализирована при объявлении и её значение нельзя изменить после этого. Однако, если const используется для объявления объекта или массива, можно изменять их содержимое.


//Пример:
function exampleConst() {
  const z = 10;
  console.log(z); // 10
  z = 20; // TypeError: Assignment to constant variable.
}
exampleConst();

function exampleConstObject() {
  const obj = { key: 'value' };
  obj.key = 'new value'; // Изменение допустимо
  console.log(obj.key); // 'new value'
}
exampleConstObject();


//Когда использовать

//✅`var`: Обычно рекомендуется избегать, так как let и const обеспечивают лучшую управляемость кода.
//✅`let`: Используется для переменных, которые могут изменяться в процессе выполнения программы.
//✅`const`: Используется для значений, которые не будут переназначены. Это помогает предотвратить ошибки и делает код более предсказуемым.



30. //Что такое функция в js ?


//Функция — это блок кода, предназначенный для выполнения конкретной задачи, который может быть вызван многократно в разных местах программы. Функции позволяют структурировать код, повышать его читаемость и повторно использовать части кода.


//Зачем они нужны

//1️⃣Повторное использование кода: Один раз написав функцию, можно вызывать её множество раз с разными аргументами, не переписывая один и тот же код.
//2️⃣Упрощение и структурирование кода: Функции помогают разбивать программу на логические блоки, что делает код более понятным и поддерживаемым.
//3️⃣Инкапсуляция: Функции могут скрывать внутреннюю реализацию и предоставлять только необходимый интерфейс.


//Как они создаются

//Есть несколько способов создания функций:

//1️⃣Function Declaration (Объявление функции):
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Hello, Alice!
//Функция объявляется с помощью ключевого слова function, за которым следуют имя функции, список параметров в круглых скобках и тело функции в фигурных скобках.


//2️⃣Function Expression (Функциональное выражение):
const greet = function(name) {
  return
//ни нужны

//1️⃣Повтор

};
console.log(greet('Bob')); // Hello, Bob!
//Функция создается и присваивается переменной. Такие функции могут быть анонимными (без имени).


//3️⃣Arrow Function (Стрелочная функция):

`
const greet = (name) => {
  return
 Hello, ${name}!;

};
console.log(greet('Carol')); // Hello, Carol!

`
//Стрелочные функции имеют более короткий синтаксис и не имеют своего контекста this.


//Вызов функции

//Функцию можно вызвать, используя её имя и передавая необходимые аргументы в круглых скобках:
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

//Параметры и аргументы

//✅Параметры — это переменные, которые перечислены в круглых скобках при объявлении функции.
//✅Аргументы — это значения, которые передаются функции при её вызове.


//Возвращаемое значение

//Функция может возвращать значение с помощью ключевого слова return. Если return отсутствует, функция возвращает undefined.
function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5)); // 20


//Область видимости

//Переменные, объявленные внутри функции, имеют локальную область видимости и недоступны за её пределами:
function scopeExample() {
  let localVar = 'I am local';
  console.log(localVar); // I am local
}
scopeExample();
console.log(localVar); // ReferenceError: localVar is not defined




//Замыкания (Closures)

//Функции имеют доступ к переменным из внешних функций благодаря замыканиям:
function outerFunction() {
  let outerVar = 'I am outside!';
  function innerFunction() {
    console.log(outerVar);
  }
  return innerFunction;
}
const inner = outerFunction();
inner(); // I am outside!



//Функция — это блок кода, который можно многократно использовать. Функции помогают делать код структурированным, повторно используемым и более читаемым.


31.  // DOM (Document Object Model) необходим для взаимодействия с веб-страницами и управления их содержимым, структурой и стилями программным образом. DOM представляет собой программный интерфейс для HTML и XML документов. Он описывает логическую структуру документов и позволяет языкам программирования взаимодействовать с ними.


//Зачем он нужен

//1️⃣Доступ к элементам страницы: Позволяет программно получать доступ к элементам HTML-документа (теги, текст, атрибуты) и манипулировать ими.
//2️⃣Изменение содержимого: С помощью него можно изменять содержимое страницы динамически, например, обновлять текст, менять изображения, добавлять или удалять элементы.
//3️⃣Обработка событий: Позволяет обрабатывать события, такие как клики, нажатия клавиш, прокрутка и другие взаимодействия пользователя с веб-страницей.
//4️⃣Динамическое изменение структуры страницы: Предоставляет методы для добавления, удаления и изменения элементов и атрибутов, что позволяет динамически изменять структуру страницы.
//5️⃣Интерактивность: С помощью него можно создавать интерактивные веб-приложения, которые реагируют на действия пользователя без перезагрузки страницы.


//Как он работает 

//Представляет собой древовидную структуру, где каждый элемент страницы является узлом дерева. Вершиной дерева является объект document, который представляет весь HTML-документ. Узлы могут быть элементами (<div>, <p>, <a> и т.д.), текстом, комментариями и другими типами.

//Пример HTML-документа:
`
<!DOCTYPE html>
<html>
<head>
  <title>Document Object Model</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is a paragraph.</p>
</body>
</html>

`

//Структура для этого документа:
`
document
└── html
    ├── head
    │   └── title
    │       └── "Document Object Model"
    └── body
        ├── h1
        │   └── "Hello, world!"
        └── p
            └── "This is a paragraph."

            `


 /*
 
 Основные методы и свойства

1️⃣Доступ к элементам:
✅document.getElementById(id): Возвращает элемент по его id.
✅document.getElementsByClassName(className): Возвращает все элементы с указанным классом.
✅document.getElementsByTagName(tagName): Возвращает все элементы с указанным тегом.
✅document.querySelector(selector): Возвращает первый элемент, соответствующий CSS селектору.
✅document.querySelectorAll(selector): Возвращает все элементы, соответствующие CSS селектору.

2️⃣Создание и удаление элементов:
✅document.createElement(tagName): Создает новый элемент.
✅parentElement.appendChild(childElement): Добавляет элемент в конец дочерних элементов родителя.
✅parentElement.removeChild(childElement): Удаляет элемент из дочерних элементов родителя.

3️⃣Изменение содержимого и атрибутов:
✅element.innerHTML: Изменяет или получает HTML-содержимое элемента.
✅element.textContent: Изменяет или получает текстовое содержимое элемента.
✅element.setAttribute(name, value): Устанавливает значение атрибута элемента.
✅element.getAttribute(name): Получает значение атрибута элемента.
 
 */ 


//Пример:
// Изменение текста заголовка
const header = document.querySelector('h1');
header.textContent = 'Hello, DOM!';

// Добавление нового параграфа
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.appendChild(newParagraph);

// Изменение атрибута
const link = document.querySelector('a');
link.setAttribute('href', 'https://www.example.com');


//DOM необходим для программного доступа и управления содержимым веб-страницы. Он позволяет изменять текст, структуру, стили и обрабатывать события на странице.


32.  //Почему не пишем все стили в style ? 


//Написание всех стилей непосредственно в атрибуте style не является хорошей практикой по ряду причин:


//1️⃣Разделение структуры и презентации

//Стилизация и структура должны быть разделены для лучшей организации и поддерживаемости кода. Когда стили находятся в CSS-файлах, а структура — в HTML, это облегчает чтение и редактирование кода.


//2️⃣Переиспользование стилей

//Позволяет переиспользовать стили на нескольких элементах и страницах. Если писать стили в атрибуте style, то каждый элемент должен иметь свои стили, что ведет к дублированию кода.

/*
.button {
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
*/


//3️⃣Упрощение изменений и обновлений

//Изменение стилей в одном месте (CSS-файл) проще и быстрее, чем изменение атрибутов style для каждого элемента. Это особенно важно для больших проектов.
/* CSS файл */
//.text-red {
//  color: red;
//}
//HTML:
//<p class="text-red">This text is red.</p>
//<p class="text-red">This text is also red.</p>
//Если нужно изменить цвет, достаточно поменять его в одном месте в CSS-файле.


//4️⃣Улучшение производительности

//Браузеры кешируют CSS-файлы, что уменьшает время загрузки страницы. Инлайновые стили загружаются каждый раз, когда загружается HTML-документ, что увеличивает нагрузку на сеть.


//5️⃣Семантика и поддержка инструментов разработки

//Стили файлах делают код более семантическим и легко анализируемым для инструментов разработки, таких как линтеры и препроцессоры. Это улучшает качество и консистентность кода.


//6️⃣Поддержка медиа-запросов и адаптивного дизайна

//CSS-файлы позволяют легко использовать медиа-запросы для адаптивного дизайна. Это сложно и неэффективно делать с инлайновыми стилями.
/* CSS файл */
//@media (max-width: 600px) {
 // .container {
  //  flex-direction: column;
  //}
//}


//Плохо vs Хорошо

//Плохо (все стили в `style`):
//<p style="color: red; font-size: 16px;">This is a paragraph.</p>
//<p style="color: red; font-size: 16px;">This is another paragraph.</p>



//Хорошо (использование CSS):
/* CSS файл */
//.red-text {
  //color: red;
  //font-size: 16px;
//}
//HTML:
//<p class="red-text">This is a paragraph.</p>
//<p class="red-text">This is another paragraph.</p>


//Мы не пишем все стили в атрибуте style, потому что это делает код сложным для чтения, поддержания и повторного использования. Вместо этого мы используем CSS-файлы для разделения структуры и стилизации, что упрощает работу с кодом и повышает производительность.


33. //Какие знаешь способы центрирования ?


// Центрирование элементов может быть выполнено несколькими способами, в зависимости от типа элемента (блочный или строчный), его размеров и родительского контейнера. Вот основные методы центрирования элементов по горизонтали и вертикали:

//Центрирование по горизонтали

//1️⃣Использование `text-align` для строчных и встроенно-блочных элементов
//.container {
  //text-align: center;
//}


//2️⃣Использование margin: auto для блочных элементов с фиксированной шириной
//.element {
  //w//idth: 50%;
  //margin: 0 auto;
//}


//Центрирование по вертикали

//1️⃣Использование Flexbox

//Позволяет легко центрировать элементы по горизонтали и вертикали.
//.container {
  //display: flex;
  //justify-content: center; /* Центрирование по горизонтали */
  //align-items: center; /* Центрирование по вертикали */
  //height: 100vh; /* Высота контейнера */
//}


//2️⃣Использование Grid Layout

//Также предоставляет простые способы для центрирования.
//.container {
  //display: grid;
  //place-items: center; /* Центрирование по горизонтали и вертикали */
  //height: 100vh; /* Высота контейнера */
//}//


//HTML:
//<div class="container">
  //<div>Центрированный элемент</div>
//</div>


//Комбинированное центрирование (по горизонтали и вертикали)

//1️⃣Flexbox

//Удобен для центрирования по обеим осям.
//.container {
  //display: flex;
  //justify-content: center; /* Центрирование по горизонтали */
  //align-items: center; /* Центрирование по вертикали */
  //}


//HTML:
//<div class="container">
  //<div>Центрированный элемент</div>
//</div>

//2️⃣Grid Layout

//Предоставляет способ центрирования по горизонтали и вертикали с использованием //place-items.
//.container {
  //display: grid;
  //place-items: center; /* Центрирование по горизонтали и вертикали */
  //height: 100vh; /* Высота контейнера */
//}
//HTML:
//<div class="container">
  //<div>Центрированный элемент</div>
//</div>

//3️⃣Абсолютное позиционирование

//В сочетании с трансформацией.
//.container {
  //position: relative;
  //height: 100vh; /* Высота контейнера */
//}
//.element {
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%); /* Центрирование с учетом размеров элемента */
//}
//HTML:
//<//div class="container">
  //<div class="element">Центрированный элемент</div>
//</>


//Центрировать элементы можно с помощью различных методов: text-align для строчных элементов, margin: auto для блочных элементов, Flexbox и Grid для универсального центрирования, а также абсолютного позиционирования с трансформацией.

34. //Чем синхронный код отличается от асинхронного ?


//Синхронный и асинхронный код отличаются тем, как они выполняются и управляют операциями ввода-вывода, временем ожидания и выполнением задач. Давайте рассмотрим их различия подробно.


//Синхронный код

//Выполняется последовательно, строка за строкой. Это означает, что каждая операция должна завершиться, прежде чем начнется следующая. Если одна операция занимает много времени (например, запрос к серверу или чтение файла), выполнение всей программы будет приостановлено, пока эта операция не завершится.

//Синхронного кода:
function syncTask() {
  console.log('Начало');
  for (let i = 0; i < 1000000000; i++) { /* Длительная операция */}
  console.log('Конец');
}

syncTask();
console.log('Это будет выполнено после syncTask');
//В этом примере, пока длительная операция (цикл) не завершится, программа не продолжит выполнение и следующий console.log не будет вызван.


//Асинхронный код

//Позволяет выполнять другие операции, не дожидаясь завершения текущих долгих операций. Это особенно полезно для задач ввода-вывода, работы с сетью и других операций, которые могут занять значительное время. Обычно используют коллбеки, промисы или async/await для обработки результата по завершении.

//С использованием коллбеков:
console.log('Начало');

setTimeout(() => {
  console.log('Асинхронная операция');
}, 1000);

console.log('Конец');
//В этом примере setTimeout ставит задачу на выполнение через 1 секунду, но код продолжает выполняться дальше, и console.log('Конец') вызывается до завершения асинхронной операции.


//С использованием промисов:
console.log('Начало');

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Асинхронная операция завершена');
  }, 1000);
}).then(message => {
  console.log(message);
});

console.log('Конец');


//С использованием async/await:
console.log('Начало');

async function asyncTask() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Асинхронная операция завершена');
}

asyncTask();
console.log('Конец');


/*

Основные отличия

1️⃣Выполнение:
✅Синхронный код: Выполняется последовательно. Каждая операция должна завершиться до начала следующей.
✅Асинхронный код: Позволяет выполнять другие операции, пока текущая не завершится.

2️⃣Блокировка:
✅Синхронный код: Может блокировать выполнение всей программы, если операция длительная.
✅Асинхронный код: Не блокирует выполнение программы. Другие операции могут выполняться параллельно.

3️⃣Управление временем ожидания:
✅Синхронный код: Время ожидания одной операции может замедлить всю программу.
✅Асинхронный код: Ожидание длительных операций не мешает выполнению других задач.

4️⃣Простота понимания:
✅Синхронный код: Проще для понимания и отладки, так как выполняется последовательно.
✅Асинхронный код: Может быть сложнее для понимания из-за необходимости управления состоянием и ожиданием результатов асинхронных операций.

*/


//Примеры

//✅Синхронный код: Полезен для простых и коротких операций, где блокировка не является проблемой.
//✅Асинхронный код: Необходим для работы с сетевыми запросами, файлами, таймерами и другими длительными операциями, где важно не блокировать выполнение программы.


//Синхронный код выполняется последовательно и может блокировать выполнение программы, если операция длительная. Асинхронный код позволяет выполнять другие операции параллельно с длительными, не блокируя выполнение программы.


35. //В чем разница между get и post ?


//Методы GET и POST — это два из наиболее часто используемых HTTP-методов для взаимодействия с веб-серверами. Они имеют разные цели и характеристики, которые делают их подходящими для различных задач.


//GET

//1️⃣Основное использование: Метод используется для запроса данных с сервера. Например, загрузка веб-страницы, получение данных из базы данных и т. д.
//2️⃣Параметры в URL: Данные передаются в URL строки в виде параметров. Пример:
      `
      GET /search?query=javascript&page=2 HTTP/1.1
   Host: www.example.com
      `
   
//3️⃣Кеширование: Запросы GET могут быть закешированы браузером и прокси-серверами, что повышает производительность при повторных запросах.
//4️⃣Букмарклеты: Запросы GET могут быть сохранены в закладках (букмарклеты) и легко шарятся.
//5️⃣Идемпотентность: Запросы GET должны быть идемпотентными, то есть выполнение одного и того же запроса несколько раз не должно изменять состояние сервера.
//6️⃣Ограничение по длине: URL имеет ограничение по длине (в зависимости от браузера и сервера, обычно около 2000 символов).


//POST

//1️⃣Основное использование: Метод используется для отправки данных на сервер, например, при отправке формы, загрузке файла и т. д.
//2️⃣Параметры в теле запроса: Данные передаются в теле HTTP-запроса, а не в URL. Пример:
     `
      POST /submit-form HTTP/1.1
   Host: www.example.com
   Content-Type: application/x-www-form-urlencoded
   Content-Length: 27

   username=john&password=1234
     `
   
//3️⃣Безопасность: Данные, передаваемые с помощью POST, не видны в URL, что делает этот метод более безопасным для передачи чувствительных данных (например, паролей). Однако данные все равно могут быть перехвачены, если не используется HTTPS.
//4️⃣Кеширование: Запросы POST не кешируются браузером по умолчанию.
//5️⃣Нет ограничений по длине: Метод POST не имеет таких же строгих ограничений по длине данных, как GET, что делает его подходящим для отправки больших объемов данных.
//6️⃣Неидемпотентность: Запросы POST могут изменять состояние сервера, и выполнение одного и того же запроса несколько раз может привести к разным результатам (например, повторная отправка формы может создать дубликаты данных).


`
Примеры

GET:

<form action="/search" method="get">
  <input type="text" name="query" />
  <button type="submit">Search</button>
</form>


POST:

<form action="/submit-form" method="post">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <button type="submit">Submit</button>
</form>

`

/*

Сравнение

| Характеристика           | GET                              | POST                              |
|--------------------------|-----------------------------------|-----------------------------------|
| Цель                     | Получение данных                  | Отправка данных                   |
| Параметры                | В URL                             | В теле запроса                    |
| Кеширование              | Да                                | Нет                               |
| Безопасность             | Менее безопасный для чувствительных данных | Более безопасный для чувствительных данных (при использовании HTTPS) |
| Ограничение по длине     | Да (обычно около 2000 символов)   | Нет                               |
| Идемпотентность          | Да                                | Нет                               |
| Возможность закладок     | Да                                | Нет                               |

*/


//GET используется для получения данных и передает параметры в URL, может кешироваться и имеет ограничение по длине URL. POST используется для отправки данных, передает параметры в теле запроса, не кешируется и не имеет строгих ограничений по длине данных.


36. //Вопрос из таблицы? 


//Запросы к серверу можно писать в различных частях кода в зависимости от архитектуры вашего приложения и используемых технологий. Основное правило — писать серверные запросы там, где это наиболее логично с точки зрения структуры и логики вашего кода. Рассмотрим несколько распространенных подходов и ситуаций.


//1️⃣ Клиент-серверные приложения

//Веб-приложения (JavaScript/TypeScript)


//Для веб-приложений запросы к серверу обычно выполняются на стороне клиента (в браузере) с использованием JavaScript или TypeScript. Чаще всего это делается с помощью API, таких как fetch или axios.

//Пример с использованием fetch:


function fetchData() {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


//Веб-приложения с использованием библиотек/фреймворков

//Когда вы используете фреймворки, такие как React, Angular или Vue, запросы к серверу обычно выполняются в компонентах или сервисах.

//Пример с использованием React:


import React, { useEffect, useState } from 'react';

function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            {data ? <div>Data: {data}</div> : <div>Loading...</div>}
        </div>
    );
}


//Мобильные приложения

//Для мобильных приложений, разработанных с использованием таких технологий, как React Native, Swift или Kotlin, запросы к серверу также выполняются в коде приложения.

//Пример с использованием React Native:


import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <View>
            {data ? <Text>Data: {data}</Text> : <Text>Loading...</Text>}
        </View>
    );
}


//2️⃣ Серверные приложения

// Серверные скрипты (Node.js)

//В случае серверных приложений на Node.js запросы к другим серверам могут выполняться для интеграции с внешними API или микросервисами.

//Пример с использованием axios:

const axios = require('axios');

axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


    //Заключение

//Запросы к серверу можно писать в различных частях вашего кода в зависимости от архитектуры приложения и используемых технологий. Важно, чтобы запросы выполнялись в логически обоснованных местах, а их логика была хорошо инкапсулирована и легко тестируема.


37. //Что такое hoisting ?


//Поднятие (hoisting) — это механизм, при котором объявления переменных и функций поднимаются вверх своей области видимости во время компиляции, до фактического выполнения кода. Это означает, что вы можете использовать переменные и функции до их объявления в коде.


//Hoisting переменных

//Для переменных, объявленных с использованием var, только само объявление поднимается, а присвоение значения остается на своем месте. Это может привести к неожиданным результатам.

`
console.log(a); // undefined
var a = 5;
console.log(a); // 5
`

//Интерпретируется как:
`
var a;
console.log(a); // undefined
a = 5;
console.log(a); // 5
`

//Переменные, объявленные с помощью let и const, также поднимаются, но находятся в так называемой "временной мертвой зоне" (temporal dead zone, TDZ) до тех пор, пока выполнение кода не дойдет до строки их объявления. Попытка доступа к таким переменным до их объявления вызывает ошибку.

console.log(c); // ReferenceError: Cannot access 'b' before initialization
let c = 10;
console.log(c); // 10

console.log(d); // ReferenceError: Cannot access 'c' before initialization
const d = 15;
console.log(d); // 15

//Hoisting функций

//Функции, объявленные с помощью function declaration, полностью поднимаются — как объявление, так и их определение. Это позволяет вызывать функции до их объявления в коде.
hoistedFunction(); // "This function is hoisted"

function hoistedFunction() {
  console.log("This function is hoisted");
}

//Функции, объявленные как function expression, ведут себя иначе. Только объявление переменной поднимается, но не ее присвоение. Это значит, что вы не можете вызвать такую функцию до ее фактического объявления.
hoistedFunctionExpression(); // TypeError: hoistedFunctionExpression is not a function

var hoistedFunctionExpression = function() {
  console.log("This function is not hoisted");
};


//Важные моменты

//1️⃣Переменные, объявленные с помощью `var`, поднимаются, но их значение становится undefined до присвоения.
//2️⃣Переменные, объявленные с помощью let ито такое  поднимаются, но остаются недоступными до фактического объявления в коде, что вызывает ошибку при доступе.
//3️⃣Функции, объявленные как function declaration, полностью поднимаются и могут быть вызваны до своего объявления.
//4️⃣Функции, объявленные как function expression, поднимаются только как переменные, а присвоение происходит на месте, что делает их недоступными до присвоения.


//Поднятие (hoisting) — это механизм, при котором объявления переменных и функций поднимаются вверх своей области видимости во время компиляции, позволяя использовать их до фактического объявления в коде. Однако, переменные, объявленные с let и const, остаются недоступными до их фактического объявления.


38. //Что такое merge и rebase, в чем отличие друг от друга ?

//merge и rebase — это два способа интеграции изменений из одной ветки в другую в системе контроля версий Git. Оба метода имеют свои особенности и подходят для разных сценариев.

//Merge (слияние)

//Объединяет изменения из одной ветки в другую, создавая новый коммит слияния (merge commit). Этот метод сохраняет историю всех коммитов, включая все ветвления и слияния.

//1️⃣Предположим, у вас есть две ветки: main и feature.
//2️⃣В ветке feature вы сделали несколько коммитов.
//3️⃣Вы хотите объединить изменения из feature в main.

`
git checkout main
git merge feature
`

//В результате получается история, включающая коммит слияния:

`
A---B---C---F---G (main)
     \       /
      D---E (feature)
`

//Где F и G — коммиты в ветке main, а D и E — коммиты в ветке feature. Коммит G — это коммит слияния, который объединяет изменения из feature в main.


//Rebase (перебазирование) 

//Перемещает или переписывает базу текущей ветки на указанную базу другой ветки. Это переписывает историю коммитов, создавая новые коммиты для каждого из оригинальных коммитов.

//1️⃣Предположим, у вас есть две ветки: main и feature.
//1️⃣В ветке feature вы сделали несколько коммитов.
//3️⃣Вы хотите перенести изменения из feature на текущий конец main.

`
git checkout feature
git rebase main
`

//В результате история переписывается, как если бы коммиты из feature были сделаны на основе самой свежей версии main:

`
A---B---C---F---G (main)
                 \
                  D'---E' (feature)
`

//Где D' и E' — это новые коммиты, созданные при перебазировании, основанные на последних изменениях из main.

/*

Основные отличия

1️⃣История коммитов:
✅Merge: Сохраняет всю историю, включая коммиты слияния. История показывает, когда и как происходили слияния веток.
✅Rebase: Переписывает историю, делая её линейной. История показывает, как если бы все изменения были сделаны последовательно, без ветвлений.

2️⃣Коммиты слияния:
✅Merge: Создает новый коммит слияния, который объединяет изменения из двух веток.
✅Rebase: Не создает коммит слияния. Перебазирование "переносит" коммиты одной ветки на другую.

3️⃣Конфликты:
✅Merge: Конфликты решаются один раз при слиянии.
✅Rebase: Конфликты могут возникнуть на каждом коммите, и их нужно решать поэтапно.

4️⃣Применение:
✅Merge: Хорош для сохранения полного контекста истории разработки, особенно в командной работе.
✅Rebase: Хорош для поддержания чистой, линейной истории, особенно перед слиянием ветки в основную ветку, например, main или master.

*/


//Когда использовать

//✅Используйте `merge`, когда вы хотите сохранить всю историю разработки, включая все ветвления и слияния. Это полезно для командной работы, где важно видеть весь контекст изменений.
//✅Используйте rebase, когда вы хотите поддерживать чистую и линейную историю. Это особенно полезно для интеграции изменений в основную ветку перед созданием pull request'ов, чтобы история коммитов была более понятной.


//Merge объединяет изменения из одной ветки в другую, создавая новый коммит слияния и сохраняя всю историю. Rebase переписывает историю, делая её линейной, перемещая коммиты из одной ветки на базу другой.


39. //Что такое dns ?


//DNS (Domain Name System) — это система, которая переводит доменные имена, понятные человеку, в IP-адреса, понятные компьютерам и сетевым устройствам. Основная задача DNS — облегчить доступ к ресурсам в Интернете, позволяя использовать легко запоминаемые доменные имена вместо сложных числовых IP-адресов.


//Основные функции 

//1️⃣Разрешение доменных имен:
//✅Основная функция DNS заключается в преобразовании доменных имен (например, www.example.com) в соответствующие им IP-адреса (например, 93.184.216.34), чтобы веб-браузеры и другие интернет-клиенты могли находить и обращаться к нужным ресурсам.

//2️⃣Обратное разрешение (Reverse DNS):
//✅Обратное разрешение — это процесс преобразования IP-адресов обратно в доменные имена. Это используется для проверки подлинности или при проведении сетевой диагностики.


//Как он работает

//Процесс разрешения доменного имени включает несколько этапов и компонентов:

//1️⃣Введение DNS-кэша:
//✅Браузер и операционная система сначала проверяют свои локальные кэши на наличие записи о недавно разрешенном доменном имени. Если запись найдена и не истекла, используется закэшированный IP-адрес.

//2️⃣Запрос к DNS-серверу:
//✅Если локальный кэш не содержит нужной записи, запрос отправляется к DNS-серверу вашего интернет-провайдера (ISP) или другого конфигурируемого DNS-сервера (например, Google Public DNS).

//3️⃣Рекурсивный запрос:
//✅DNS-сервер провайдера может выполнять рекурсивный запрос, запрашивая информацию у других DNS-серверов, если он сам не знает ответа. Этот процесс включает несколько шагов:
//✅Запрос к корневому DNS-серверу.
//✅Корневой сервер направляет к DNS-серверу верхнего уровня домена (TLD, например, .com, .org).
//✅Сервер верхнего уровня направляет к авторитетному DNS-серверу конкретного домена.



//4️⃣Авторитетные DNS-серверы:
//✅Авторитетный DNS-сервер для домена (например, example.com) содержит окончательную информацию об IP-адресе для запрашиваемого доменного имени и возвращает её DNS-серверу провайдера.

//5️⃣Ответ клиенту:
//✅DNS-сервер провайдера кэширует полученный IP-адрес и отправляет его обратно клиенту (вашему браузеру или операционной системе).

//6️⃣Доступ к ресурсу:
//✅Клиент использует полученный IP-адрес для установления соединения с нужным сервером и получения запрашиваемых данных.


//Допустим, вы вводите в браузере www.example.com:

//1️⃣Браузер проверяет локальный DNS-кэш.
//2️⃣Если записи нет, браузер отправляет запрос на DNS-сервер провайдера.
//3️⃣DNS-сервер провайдера выполняет рекурсивный запрос:
//✅Запрашивает корневой DNS-сервер.
//✅Корневой сервер направляет к серверу TLD .com.
//✅Сервер TLD направляет к авторитетному DNS-серверу example.com.
//4️⃣Авторитетный DNS-сервер example.com возвращает IP-адрес, например, 93.184.216.34.
//5️⃣DNS-сервер провайдера кэширует этот IP-адрес и возвращает его браузеру.
//6️⃣Браузер устанавливает соединение с сервером по IP-адресу 93.184.216.34 и загружает страницу.



//DNS (Domain Name System) — это система, которая преобразует доменные имена в IP-адреса и наоборот. Она позволяет пользователям вводить легко запоминаемые доменные имена вместо сложных IP-адресов для доступа к ресурсам в Интернете. DNS включает в себя процессы проверки кэша, рекурсивные запросы к DNS-серверам и использование различных типов записей для разрешения имен и управления ресурсами.



40.  //Какие особенности в js ?


//Это высокоуровневый, интерпретируемый язык программирования, который обладает рядом уникальных особенностей и возможностей. Рассмотрим основные из них:


//Это высокоуровневый, интерпретируемый язык программирования, который обладает рядом уникальных особенностей и возможностей. Рассмотрим основные из них:


//1️⃣Динамическая типизация

//Является языком с динамической типизацией, что означает, что тип переменной определяется во время выполнения, а не во время компиляции. Тип переменной может изменяться в процессе выполнения программы.


let variable = 42; // Число
variable = 'Hello, world!'; // Строка


//2️⃣Функции первого класса

//Являются объектами первого класса, что означает, что функции могут быть присвоены переменным, переданы как аргументы другим функциям и возвращены из других функций.
function greet(name) {
  return `Hello, ${name}`;
}

const sayHello = greet;
console.log(sayHello('Alice')); // Hello, Alice

function executeFunction(fn, value) {
  return fn(value);
}

console.log(executeFunction(greet, 'Bob')); // Hello, Bob



//3️⃣Замыкания (Closures)

//Это функции, которые имеют доступ к переменным из своей внешней функции даже после того, как внешняя функция завершила выполнение. Это позволяет создавать функции с привязанными к ним переменными из внешнего окружения.
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2



//4️⃣Прототипное наследование

//Использует прототипное наследование вместо классового. Каждый объект в JavaScript имеет скрытое свойство [[Prototype]], которое указывает на другой объект, используемый в качестве прототипа.
const animal = {
  speak: function() {
    console.log(`${this.name} издает звук`);
  }
};

const dog = Object.create(animal);
dog.name = 'Рекс';
dog.speak(); // Рекс издает звук


//function fetchData(callback) {
  setTimeout(() => {
    callback('Данные получены');
  }, 1000);


fetchData((data) => {
  console.log(data); // Данные получены (через 1 секунду)
});


//Использование промисов:
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Данные получены');
    }, 1000);
  });
}

fetchData().then(data => {
  console.log(data); // Данные получены (через 1 секунду)
});


//Использование async/await:
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Данные получены');
    }, 1000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data); // Данные получены (через 1 секунду)
}

getData();


//6️⃣Интуитивно понятная работа с объектами

//Имеет мощные встроенные функции для работы с объектами, такие как деструктуризация, операторы расширения и методы объектов.

//Деструктуризация:
const person = {
  name: 'Alice',
  age: 30
};

const { name, age } = person;
console.log(name); // Alice
console.log(age); // 30


//Операторы расширения:

`
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj); // { a: 1, b: 3, c: 4 }
`

//Обладает множеством уникальных особенностей, таких как динамическая типизация, функции первого класса, замыкания, прототипное наследование, асинхронное программирование с коллбеками, промисами и async/await, интуитивно понятная работа с объектами и массивами, а также событийно-ориентированное программирование. Эти возможности делают его мощным и гибким инструментом для веб-разработки и других приложений.


41.  //Зачем создавались библиотеки react и другие?


//Библиотеки, такие как React, создавались для упрощения и оптимизации процесса разработки пользовательских интерфейсов (UI). Вот несколько ключевых причин, почему создавались React и другие библиотеки:



/*

1️⃣ Повышение эффективности разработки

➕ Проблема: Написание большого количества кода вручную для создания динамических веб-страниц может быть громоздким и ошибочным.

➕ Решение: React позволяет разбивать интерфейс на отдельные компоненты, которые можно повторно использовать и комбинировать. Это снижает объем дублирующегося кода и упрощает его сопровождение.

2️⃣ Улучшение производительности

➕ Проблема: Постоянное обновление DOM (Document Object Model) может быть медленным и ресурсоемким.

➕ Решение: React использует виртуальный DOM, который минимизирует количество реальных изменений в DOM, обновляя только те элементы, которые действительно изменились.

3️⃣ Облегчение работы с состоянием приложения

➕ Проблема: Управление состоянием больших и сложных приложений может стать хаотичным.

➕ Решение: React предоставляет механизмы для удобного управления состоянием компонентов с помощью useState, useReducer, и других хуков. Это делает логику управления состоянием более ясной и предсказуемой.

4️⃣ Улучшение масштабируемости и поддерживаемости кода

➕ Проблема: По мере роста приложения, код может стать сложным для понимания и изменения.

➕ Решение: Подход к компонентам в React позволяет разработчикам легче разделять задачи и работать над отдельными частями приложения независимо друг от друга. Это улучшает масштабируемость и поддерживаемость кода.

5️⃣ Сообщество и экосистема

➕ Проблема: Наличие обширного сообщества и инструментов для разработки.

➕ Решение: React имеет большое сообщество разработчиков, множество библиотек и инструментов, которые упрощают разработку и интеграцию различных функций в приложения.

*/


/*

import React, { useState } from 'react';

function Counter() {
  // Определение состояния count с начальным значением 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>
        Кликни меня
      </button>
    </div>
  );
}

export default Counter;

*/


//В этом примере показан простой компонент счетчика, который использует состояние и событие клика для увеличения счетчика.

//Краткий ответ

//React и другие библиотеки создавались для упрощения разработки, улучшения производительности, управления состоянием, масштабируемости и поддерживаемости кода.


42.  //Какие минусы у React?


//Несмотря на множество преимуществ, у React есть и недостатки, которые могут повлиять на выбор этой библиотеки для проекта. Вот основные из них:


/*

1️⃣ Крутая кривая обучения

➕ Проблема: Для новых разработчиков React может показаться сложным из-за концепций, таких как JSX, компоненты, хуки и управление состоянием.

➕ Последствия: Требуется время и усилия для освоения всех особенностей и возможностей библиотеки.

2️⃣ Быстрая эволюция

➕ Проблема: React и его экосистема развиваются очень быстро, часто выходят новые версии и дополнительные библиотеки.

➕ Последствия: Разработчикам нужно постоянно следить за обновлениями и адаптироваться к изменениям, что может быть трудоемким.

3️⃣ Неисчерпывающая документация для продвинутых тем

➕ Проблема: Хотя базовая документация у React хорошая, для более сложных или специфичных задач может не хватать примеров и объяснений.

➕ Последствия: Разработчики могут столкнуться с трудностями при поиске решений для нестандартных проблем.

4️⃣ Ограниченные возможности для SEO

➕ Проблема: Приложения на React рендерятся на стороне клиента, что может ухудшить индексацию страниц поисковыми системами.

➕ Последствия: Требуется дополнительная настройка, например, использование серверного рендеринга (Next.js), для улучшения SEO.

5️⃣ Сложность в конфигурировании и настройке

➕ Проблема: В отличие от некоторых фреймворков, React не предоставляет единого "из коробки" решения. Нужно самостоятельно выбирать и настраивать инструменты для маршрутизации, управления состоянием и сборки проекта.

➕ Последствия: Это увеличивает время на первоначальную настройку и требует знаний в области различных инструментов и библиотек.

6️⃣ Производительность при большом количестве компонентов

 ➕Проблема: При большом количестве компонентов и частых обновлениях состояния могут возникнуть проблемы с производительностью.

➕ Последствия: Требуется оптимизация кода и использование таких инструментов, как мемоизация (React.memo, хуки useMemo и useCallback), чтобы избежать ненужных перерисовок.

🤔 Пример проблемы с производительностью:

*/

`
import React, { useState, useMemo } from 'react';


function ExpensiveComponent({ num }) {
  const computedValue = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < num * 1000; i++) {
      sum += i;
    }
    return sum;
  }, [num]);

  return <div>Computed Value: {computedValue}</div>;
}

function App() {
  const [num, setNum] = useState(1);

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>Increase</button>
      <ExpensiveComponent num={num} />
    </div>
  );
}

export default App;

`

//В этом примере показана оптимизация вычислений с использованием useMemo.


//Минусы React: сложность обучения, быстрая эволюция, недостаток продвинутой документации, ограниченные возможности SEO, сложность конфигурации и возможные проблемы с производительностью при большом количестве компонентов.


43. //Как часто происходит рендер? 