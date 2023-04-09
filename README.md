# payzi-randoms

[![](https://nodei.co/npm/payzi-randoms.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/payzi-randoms/)

> Пакет со всякими штуками для рандома

# Установка

```
$ npm install payzi-randoms
```

# Рандомное число от 1 до 10

```js
const { RandomInt } = require('payzi-randoms');
let RandomNumber = RandomInt(1,10);
console.log(RandomNumber);
//7
```

# Рандомный элемент из массива

```js
const { RandomArrayElement } = require('payzi-randoms');
let arr = ['Привет', 'День добрый', 'Здравствуйте']
let RandomElement = RandomArrayElement(arr);
console.log(RandomElement);
//'День добрый'
```