// // II)
// // 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// // 2) Всі роки які вводить користувач записується в масив years
// //  3) Коли зупинився цикл потрібно перебрати масив years
// // і вивести в консоль запис
// // 1952 рік - 20 століття
// // 1440 рік - 15 століття

// // let year = [];
// // let years;
// // year = prompt();

// // const century = function (y) {
// //   for (i = 0; i < y.length; i += 1) {
// //     return `${year} рік, ${
// //       y % 100 === 0 ? Math.ceil(y / 100 + 1) : Math.ceil(y / 100)
// //     } століття`;
// //   }
// // };
// // console.log(century(year));

// // const numbers = [1, 2, 3];

// // // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(numbers[i]);
// // }

// // _______________________

// // const fn = function (x) {
// //   return Math.floor(x / 100 + 1);
// // };
// // const yearsFun = function (y) {
// //   let years = [];
// //   let i;
// //   do {
// //     i = prompt("Введи год пёс: ");
// //     i === null ? "" : years.push(i);
// //     console.log(years);
// //   } while (i !== null);
// //   years.forEach((year) => console.log(`Год: ${year}, век:  ${fn(year)}`));
// // };
// // yearsFun();
// // ______________________________

// // / 1) Написати ф-ю showYear що приймає рік і перевіряє чи він є високосний
// // 2) Функція повертає true якщо рік високосний і false якщо ні
// // const numbers = [1589];
// // // Функция которая проверяет величину значения, возвращает true или false.
// // const isBigEnough = val => val % 4 === 0;

// // // Допустим нам нужно узнать достаточно ли большие ВСЕ числа в коллекции.
// // // Все что нам нужно это буль true/false. Метод every вернет true только тогда,
// // // когда все элементы коллекции будут удовлетворять условию в callback-функции.

// // console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false

// // const years = [2020];

// // const badYears = years.some(years => years % 4 === 0);

// // console.log(badYears);

// const years = [2020];

// const badYears = function (y) {
//   if (y % 4 === 0) {
//     return console.log(true);
//   }
// };

// badYears(years);

// // Write code under this line
// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// // const getUsersWithEyeColor = (array, color) =>
// //   array.filter(({ eyeColor }) => eyeColor);

// // console.log(getUsersWithEyeColor(users, 'blue'));
// // const getUsersWithGender = (arry, gender) =>
// //   array.filter(({ gender }) => gender === { gender });

// // console.log(getUsersWithGender(users, 'male'));

// // Write code under this line

// // =
// // const getUsersWithGender = (array, gender1) =>
// //   array.filter(({ gender }) => gender1 === gender).map(({ name }) => name);

// // console.log(getUsersWithGender(users, 'male'));

// // =
// // const getUsersWithAge = (array, min, max) =>
// //   array
// //     .filter(({ age }) => min < age && max > age)
//     .map(({ name, email }) => ({ name, email }));

// const getUsersWithAge = (array, min, max) => array
// .filter(({age}) => min<age&&max>age)
// .map(({name, email}) =>  ({name,email}));

// console.log(getUsersWithAge(users, 20, 30));
// /* [
//     { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
//     { name: 'Elma Head', email: 'elmahead@omatom.com' },
//     { name: 'Carey Barr', email: 'careybarr@nurali.com' }
// ] */

// console.log(getUsersWithAge(users, 30, 40));
// // Write code under this line
// const calculateTotalBalance = array =>
//   array.reduce((acc, { balance }) => {
//     return acc + balance;
//   }, 0);
// console.log(calculateTotalBalance(users));
// // 20916
// Write code under this line
// Write code under this line

// // Write code under this line
// const getNamesSortedByFriendsCount = array => {
//   const arr1 = [...array];
//   return arr1
//     .sort(({ friends }) => friends.length - friends.length)
//     .map(({ name }) => name);
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [
// //   'Moore Hensley',
// //   'Sharlene Bush',
// //   'Elma Head',
// //   'Carey Barr',
// //   'Blackburn Dotson',
// //   'Sheree Anthony',
// //   'Ross Vazquez',
// // ];

// // Write code under this line

// const getSortedUniqueSkills = array =>
//   array
//     .filter(el => el.skills)
//     .reduce((acc, el) => {
//       if (!acc.includes(el.skills)) {
//         acc[acc.length] = el;
//       }
//       return acc;
//     }, []);

// console.log(getSortedUniqueSkills(users));
// /* [ 'adipisicing', 'amet',
//  'anim', 'commodo',
//  'culpa', 'elit',
//  'ex', 'ipsum',
//  'irure', 'laborum',
//  'lorem', 'mollit',
//  'non', 'nostrud',
//  'nulla', 'proident',
//  'tempor', 'velit',
//  'veniam' ]; */

// _______________________
// написати ф - ю getSalary(worker, rate) яка приймає аргументами обєкт робітника і погодинну ставку.
//   Ф - я вертає зарплату робітника за тиждень з урахуванням штрафів і премій
// hours - години роботи
// value - сума штрафу
// premium - премія
// let worker = {
//   workSchedule: [
//     { day: 'M', hours: 9 },
//     { day: 'T', hours: 10 },
//     { day: 'W', hours: 11 },
//     { day: 'T', hours: 5 },
//     { day: 'F', hours: 12 },
//   ],
//   penalty: [
//     { day: 'M', value: 0 },
//     { day: 'T', value: 120 },
//     { day: 'W', value: 50 },
//     { day: 'T', value: 0 },
//     { day: 'F', value: 35 },
//   ],
//   premium: 500,
// };

// const getSalary = (worker, rate) =>
//   worker.workSchedule
//     .reduce((acc, { hours }) => (acc += rate * hours))
//     // const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// //     .console.log(getSalary(worker, 20)); // 1235
// // console.log(getSalary(worker, 8)); // 671
// const add = function (a, c) {
//   return a + c;
// };

// // 1, 2, 3 это аргументы

// const hotel = {
//   name: 1,
//   stars: 5,
//   status: 100,
// };

// // Объявим переменные и присвоим им значения из объекта
// const { name, stars, status } = hotel;

// const result = add(name, stars);
// console.log(result); //106
// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find(user => user.id === '002');
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(arr => arr.id === id);

// console.log(getUserById(users, '001'));
const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// ________________________________________________
// let a = ['Goldie Gentry', 'Briana Decker'];
// // 20916
// const getUsersWithFriend = (array, friendName) =>
//   array.filter(({ friends }) => friends.includes(friendName));

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// // [ 'Elma Head', 'Sheree Anthony' ]

// // _________________________________________________________________________

// // const getNamesSortedByFriendsCount = array => {
// //   const arr = [...array];
// //   return arr
// //     .sort((a, b) => a.friends.length - b.friends.length)
// //     .map(({ name }) => name);
// // };

// // console.log(getNamesSortedByFriendsCount(users));

// // ort((a, b) => {});

// // const getSortedUniqueSkills = array =>
// //   [
// //     ...new Set(array.reduce((acc, { skills }) => [...acc, ...skills], [])),
// //   ].sort();

// // console.log(getSortedUniqueSkills(users));
// // // .reduce(
// // //       (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
// // //       [],
// // // const getSortedUniqueSkills = array => [
// // // //   ...new Set(array.reduce((acc, { skills }) => acc + skills, [])),
// // // // ];
// // const heading = document.createElement('h1');
// // console.log(heading); // <h1></h1>

// // heading.textContent = 'This is a heading';
// // console.log(heading); // <h1>This is a heading</h1>

// // const image = document.createElement('img');
// // image.setAttribute('src', 'https://placeimg.com/640/480/nature');
// // image.setAttribute('alt', 'nature');

// // console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="nature">
// // 2) Дан список в штмл. Вставьте в него 3 лишки с текстом
// // 3)Создайте 5 красных кругов 100х100 пикселей (стили подключаються в цсс)
// // 4)Доавьте всем дивам нумерацию (в свойство текс контент записывается какой это по счёту див)
// // 5)Создайте 3 картинки с котиками за одно операцию
// // const heading = document.querySelector('ul');
// // console.log(heading);
// // for (let i = 0; i < 3; i++) {
// //   const li = document.createElement('li');
// //   li.textContent = 'sdf';
// //   heading.append(li);
// // }
// // heading.childNodes.classList.add(cls);

// // const body = document.querySelector('body');
// // const div = document.createElement('div');

// // for (let i = 0; i < 5; i++) {
// //   const div = document.createElement('div');
// //   body.append(div);
// //   div.classList.add('circle');
// // }

// // const divList = document.querySelectorAll('div');
// // divList.forEach((el, i) => {
// //   el.textContent = `${i + 1}`;
// // });
// // const body = document.querySelector('body');

// // for (let i = 0; i < 3; i++) {
// //   const img = document.createElement('img');
// //   body.append(img);
// //   let a = Math.floor(Math.random() * 200);
// //   img.src = `https://picsum.photos/id/${a}/200/300`;
// // }

// // ________________
// const body = document.querySelector('body');

// body.innerHTML = '<h1>hellow</h1>';

// body.insertAdjacentHTML('afterbegin', <h1>hello</h1>);
// body.textContent='hello'

// const body = document.querySelector('body');
// body.addEventListener('click', e => {
//   e.currentTarget.classList.toggle('green');
// });

// const tex = document.createElement('h1');
// tex.textContent = 'hellow';
// body.append(tex);

// const left = document.querySelector('.left');
// const right = document.querySelector('.right');
// const ball = document.querySelector('.circle');
// const conteyner = document.querySelector('.conteyner');

// let x = 0;

// conteyner.addEventListener('click', e => {
//   if (e.target === left) {
//     x -= 10;
//     ball.style.transform = `translateX(${x}px)`;
//   } else if (e.target === right) {
//     x += 10;
//     ball.style.transform = `translateX(${x}px)`;
//   }
// });




// const form = document.querySelector('.form');
// const name = document.querySelector('.name');
// const surname = document.querySelector('.surname');
// const range = document.querySelector('.range');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   body.insertAdjacentHTML(
//     'beforeend',
//     `<h1 style='font-size: ${range.value}px' class="output"> Name: ${name.value}, Surname: ${surname.value}</h1>`,
//   );
// });




// range.addEventListener('input', e => {
//   const output = document.querySelectorAll('.output');
//   output
//     ? output.forEach(el => {
//         el.style.fontSize = `${range.value}px`;
//       })
//     : '';
// });
// (autput.style.fontSize = `${range.value}px`)
// autput
//   ? autput.forEach(el => {
//       el.style.fontSize = `${range.value}px`;
//     })
//   : '';




  
// 10 х вес + 6,25 х рост – 5 х возраст – 161;

// const form = document.querySelector('.form');
// const age = document.querySelector('.age');
// const hight = document.querySelector('.hight');
// const weight = document.querySelector('.weight');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   let result = 10 * weight.value + 6.25 * hight.value - 5 * age.value - 161;
//   body.insertAdjacentHTML('beforeend', `<p>Result:${result} </p>`);
// });
// window.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     console.log('Scroll event handler invocation every 300ms.');
//   }, 700),
// );

//1) Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'.
// Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'.
// Это должно работать и для вновь добавленных li.
// Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).

// const ul = document.querySelector( "#ul")
// const button = document.querySelector( "#button")
// const container = document.querySelector('.container')

// button.addEventListener('click', createli)

// function createli() {
//   let create = document.createElement('li')
//   create.textContent="Hellow"
//   ul.append(create)
// }

// function liplus(e) {
//   e.target.nodeName === 'Li' ? e.target.textContend += '!':''
// }
// ul.addEventListener('click', liplus)

// 2) Дан список с именами юзеров ul>li>p. Под таблицей сделайте форму form>input+input, 
// с помощью которой можно будет добавить нового юзера в список.Сделайте так, чтобы при клике
// на любой елемент появлялся prompt, с помощью которого можно изменить текст имени.
//   Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).


// const listUl = document.querySelector("#list");
// const form = document.querySelector("#form");
// const text = document.querySelector("#text");
// const submit = document.querySelector("#submit-btn");

// const changeElem = function (e) {
//   const name=prompt('Відіть нове імя:')
//   e.target.textContent=name
// }

// const addElement = function (e) {
//   e.preventDefault()
//   listUl.insertAdjacentHTML('beforeend',`<li><p>${text.value}</p></li>`)
// }

// listUl.addEventListener('click', changeElem)
// form.addEventListener('submit', addElement)

// console.log();