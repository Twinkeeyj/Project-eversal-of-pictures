// let arr = ['a', 'b', 'c', 'd'];

// console.log(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);
// ______________________________________________________________________________

// let arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1] + arr[2] * arr[3];

// console.log(result);

// ______________________________________________________________________________;

//  Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:

// var obj = { a: 1, b: 2, c: 3 };

// console.log(obj.c);
// console.log(obj['c']);

// ______________________________________________________________________________;
// Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.

// var obj = { Коля: '1000', Вася: '500', Петя: '200' };

// console.log(obj.Петя, obj.Коля);
// console.log(obj['Петя'], obj['Коля']);

// ______________________________________________________________________________;
//  Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// let week = {
//   понеділок: 'перший',
//   вівторок: 'другий',
//   середа: 'третій',
//   четверг: 'четвертий',
//   пятниця: 'пятий',
//   субота: 'шостий',
//   неділя: 'сьомий',
// };
// console.log(week.четверг);
// console.log(week['четверг']);

// Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
// let week = {
//   понеділок: 'перший',
//   вівторок: 'другий',
//   середа: 'третій',
//   четверг: 'четвертий',
//   пятниця: 'пятий',
//   субота: 'шостий',
//   неділя: 'сьомий',
// };
// let day = week.четверг;
// console.log(day);

// ______________________________________________________________________________;
// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr[1][0]);

// _____________________________________________________________________________;

// Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
// let arr = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' };
// console.log(arr.js[0]);

// _____________________________________________________________________________;

// Создайте двухмерный массив.Первые два ключа - это 'ru' и 'en'.Пусть первый ключ содержит элемент,
//   являющийся массивом названий дней недели по - русски, а второй - по - английски.Выведите с
// помощью этого массива понедельник по - русски и среду по английски(пусть понедельник - это
//   нулевой день).

// let week = {
//   ru: [
//     'понеділок',
//     'вівторок',
//     'середа',
//     'четверг',
//     'пятниця',
//     'субота',
//     'неділя',
//   ],
//   en: [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
//   ],
// };
// console.log(week.ru[0], week.en[2]);

// _____________________________________________________________________________;
// Пусть теперь в переменной lang хранится язык(она принимает одно из значений или 'ru',
//   или 'en' - либо то, либо то), а в переменной day - номер дня.
// Выведите словом день недели, соответствующий переменным lang и day.То есть: если,
//   к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

// let week = {
//   ru: [
//     'понеділок',
//     'вівторок',
//     'середа',
//     'четверг',
//     'пятниця',
//     'субота',
//     'неділя',
//   ],
//   en: [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
//   ],
// };
// let lang = 'en';
// let day = 3;

// if (lang === 'ru') {
//   console.log(week.ru[day]);
// }
// else if (lang === 'en') {
//   console.log(week.en[day]);
// }

// _____________________________________________________________________________;
// Если переменная a равна нулю, то выведите 'Верно',
//   иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = 1;
// if (a === 0) {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }
// _____________________________________________________________________________;
// Если переменная a больше нуля, то выведите 'Верно',
//   иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = 1;
// if (a > 0) {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }

// _____________________________________________________________________________;

// Если переменная a меньше нуля, то выведите 'Верно',
//   иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = -3;
// if (a < 0) {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }
// _____________________________________________________________________________;
// Если переменная a больше или равна нулю, то выведите 'Верно',
//   иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = 3;
// if (a >= 0) {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }

// _____________________________________________________________________________;
// Если переменная a меньше или равна нулю, то выведите 'Верно',
//   иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = 0;
// if (a <= 0) {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }
// ____________________________________________________________________;
// Если переменная a не равна нулю, то выведите 'Верно',
//   иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3
// let a = 0;
// if (a !== 0) {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }
// _____________________________________________________________________________;

// Если переменная a равна 'test', то выведите 'Верно',
//   иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 'test', 'тест', 3.
// let a = 'test';
// if (a === 'test') {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }
// _____________________________________________________________________________;
// Если переменная a равна '1' и по значению и по типу, то выведите 'Верно',
//   иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном '1', 1, 3.
// let a = 1;
// if (a === '1') {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }
// _____________________________________________________________________________;
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при test, равном true, false.Напишите два варианта скрипта - с короткой записью и с длинной.

// const test = true;
// if (test === true) {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }

// test === true ? alert('Верно') : alert('Неверно');

// _____________________________________________________________________________;
// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при test, равном true, false.Напишите два варианта скрипта - с короткой записью и с длинной.

// const test = false;
// // if (test !== true) {
// //   alert('Верно');
// // } else {
// //   alert('Неверно');
// // }

// test !== true ? alert('Верно') : alert('Неверно');

// _____________________________________________________________________________;
// Если переменная a больше нуля и меньше 5 - ти, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = -3;
// if (a > 0 && a < 5) {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }

// a > 0 && a < 5 ? alert('Верно') : alert('Неверно');

// _____________________________________________________________________________;
// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
// Выведите новое значение переменной на экран.Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = 5;
// // if (a === 0 || a === 2) {
// //   alert(a + 7);
// // } else {
// //   alert(a / 10);
// // }
// a == 0 || a === 2 ? alert(a + 7) : alert(a / 10);
// _____________________________________________________________________________;
// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных,
//   иначе выведите их разность(результат вычитания).Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// let a = 1;
// let b = 3;
// if (a <= 1 && b >= 3) {
//   alert(a + b);
// } else {
//   alert(a - b);
// }

// _____________________________________________________________________________;
// Если переменная a больше 2 - х и меньше 11 - ти, или переменная b больше или равна 6 - ти
// и меньше 14 - ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// let a = 3;
// let b = 7;
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }

// _____________________________________________________________________________;
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1',
//  то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// const num = 3;
// let result;
// switch (num) {
//   case 1:
//     result = 'зима';
//     break;

//   case 2:
//     result = 'весна';
//     break;

//   case 3:
//     result = 'лето';
//     break;

//   case 4:
//     result = 'осінь';
//     break;
//   default:
//     console.log('nea');
// }

// console.log(result); // 500
// _____________________________________________________________________________;
// В переменной day лежит какое - то число из интервала от 1 до 31. Определите в какую
// декаду месяца попадает это число(в первую, вторую или третью).

// const day = 31;

// if (day >= 1 && day < 10) {
//   alert('1 декада');
// } else if (day > 11 && day < 20) {
//   alert('2 декада');
// } else {
//   alert('3 декада');
// }

// _____________________________________________________________________________;
// В переменной month лежит какое - то число из интервала от 1 до 12. Определите в какую
// пору года попадает этот месяц(зима, лето, весна, осень).

// const month = 12;

// if (month >= 1 && month < 3) {
//   alert('зима');
// } else if (month > 2 && month < 6) {
//   alert('весна');
// } else if (month > 5 && month < 9) {
//   alert(' лето');
// } else if (month > 8 && month < 12) {
//   alert(' осень');
// } else {
//   alert('зима');
// }

// _____________________________________________________________________________;
// Дана строка, состоящая из символов, например, 'abcde'.Проверьте, что первым символом этой
// строки является буква 'a'.Если это так - выведите 'да', в противном случае выведите 'нет'.

// const string = 'abcde';
// let a = 'a';

// if (string.indexOf(a) === 0) {
//   alert('da');
// } else {
//   alert(' net');
// }

// console.log(string.indexOf(a));
// _____________________________________________________________________________;
// Дана строка с цифрами, например, '12345'.Проверьте, что первым символом этой строки
// является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// const string = '12345';
// let a = 'a';

// if (string.indexOf(a) === 1) {
//   alert('da');
// } else {
//   alert(' net');
// }

// console.log(string.indexOf(a));
// _____________________________________________________________________________;
// Дана строка из 3 - х цифр.Найдите сумму этих цифр.То есть сложите как числа первый символ строки, второй и третий.

// const str = '123';
// let sum;
// sum = +str[0] + +str[1] + +str[2];

// console.log(sum);
// console.log(typeof sum);

// _____________________________________________________________________________;
// Дана строка из 6 - ти цифр.Проверьте, что сумма первых трех цифр равняется сумме
// вторых трех цифр.Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = '123123';
//

// +str[0] + +str[1] + +str[2] === +str[3] + +str[4] + +str[5]
//   ? alert('да')
//   : alert('нет');

// _____________________________________________________________________________;
// Выведите столбец чисел от 1 до 100.

// let minNum = 1;
// const maxNum = 100;

// // while (minNum <= maxNum) {
// //   console.log(minNum);
// //   minNum += 1;
// // }

// for (let i = 1; i <= maxNum; i += 1) {
//   console.log(i);
//
// }
// _____________________________________________________________________________;
// Выведите столбец чисел от 11 до 33.

// let minNum = 11;
// const maxNum = 33;

// // while (minNum <= maxNum) {
// //   console.log(minNum);
// //   minNum += 1;
// // }

// for (let i = 11; i <= maxNum; i += 1) {
//   console.log(i);
// }

// _____________________________________________________________________________;
// Выведите столбец четных чисел в промежутке от 0 до 100

// const maxNumber = 100;
// // let minNumber = 0
// //  while (minNum <= maxNum && minNumber % 2===0 ) {
// //   console.log(minNum);
// //   minNum += 1;
// // }                                                                                  ???????

// for (let i = 0; i <= maxNumber; i += 1) {
//   if (i % 2 === 0 && i !== 0) {
//     console.log(i);
//   }
// }

// _____________________________________________________________________________;
// С помощью цикла найдите сумму чисел от 1 до 100
// const maxNumber = 10;

// let sum = 0;

// for (let i = 0; i <= maxNumber; i += 1) {
//   sum += i;
// }
// console.log(sum);

// _____________________________________________________________________________;
// Дан массив с элементами[1, 2, 3, 4, 5].С помощью цикла for выведите все эти элементы на экран.

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// // _____________________________________________________________________________;
// Дан массив с элементами[1, 2, 3, 4, 5].С помощью цикла for найдите сумму
//  элементов этого массива.Запишите ее в переменную result.

// const arr = [1, 2, 3, 4, 5];
// let result = 0;

// for (let i = 0; i < arr.length; i += 1) {
//   result += arr[i];
// }
// console.log(result);

// _____________________________________________________________________________;
// Дан объект obj.С помощью цикла for-in выведите на экран ключи и элементы этого объекта.

// let obj = { green: 'зеленый', red: 'красный', blue: 'голубой' };

// for (const key in obj) {
//   console.log(key, obj[key]);
// }

// ________________________________________________;
// Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
// С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

// let obj = { Коля: '200', Вася: '300', Петя: '400' };

// for (const key in obj) {
//   console.log(key, ':', obj[key]);
// }

// // _____________________________________________________________________________;
// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if
//  выведите на экран столбец тех элементов массива, которые больше 3 - х, но меньше 10.

// let number = [2, 5, 9, 15, 0, 6, 4];

// for (let i = 0; i < number.length; i += 1) {
//   if (number[i] > 3 && number[i] < 10) {
//     console.log(number[i]);
//   }
// }

// _____________________________________________________________________________;
// Дан массив с числами.Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.

// let num = [-1, 1, -5, -6, -8, 6, 1, 2, -79];
// let sum = 0;

// for (let i = 0; i < num.length; i += 1) {
//   if (num[i] > 0) {
//     sum += num[i];
//   }
// }
// console.log(sum);

// _____________________________________________________________________________;
// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if
//  проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран
// 'Есть!' и выйдите из цикла.Если нет - ничего делать не надо.

// const arr = [1, 2, 5, 9, 4, 13, 4, 10];

// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] === 4) {
//     console.log('Есть!');
//     break;
//   }
// }

// _____________________________________________________________________________;
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000].Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let test;
// const arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i += 1) {
//   if (
//     ((test = String(arr[i])),
//     test[0] === '1' || test[0] === '2' || test[0] === '5')
//   ) {
//     console.log(arr[i]);
//   }
// }

// _____________________________________________________________________________;
// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9.
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 1];
// let a = '-';
// let str = '';

// for (let i = 0; i < arr.length; i += 1) {
//   if (i < arr.length - 1) {
//     str += '-' + String(arr[i]);
//   } else {
//     str += '-' + String(arr[i]) + '-';
//   }
// }

// console.log(str);
// _____________________________________________________________________________;
// _____________________________________________________________________________;
// _____________________________________________________________________________;
// _____________________________________________________________________________;
// _____________________________________________________________________________;
// _____________________________________________________________________________;
// _____________________________________________________________________________;
// _____________________________________________________________________________;
// _____________________________________________________________________________;
// // _____________________________________________________________________________;
// class Car {
//   // Write code under this line
//   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
//   }

//   constructor({ price, maxSpeed }) {
//     this.speed = 0;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = false;
//     this.distance = 0;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     this._price = value;
//   }
//   turnOn() {
//     this.isOn = true;
//   }
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   accelerate(value) {
//     if (this.maxSpeed >= this.speed + value) {
//       this.speed += value;
//     } else this.speed = this.maxSpeed;
//   }

//   decelerate(value) {
//     if (this.speed - value > 0) {
//       this.speed = this.speed - value;
//     } else this.speed = 0;
//   }
//   drive(hours) {
//     if (this.isOn) {
//       this.distance = hours * this.speed;
//     }
//   }
// }
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
