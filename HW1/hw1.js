//1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

// let userName = prompt('Как Вас зовут?', 'Иван');
// alert(`Привет, ${userName}`);

//2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
// let yearBirth = +prompt('В каком году Вы родился?', '1999');
// let dateNow = new Date();  //создание даты из класса Date
// const yearNow = dateNow.getFullYear(); //получение года из даты
// let userAge = yearNow - yearBirth;
// alert(`Вам ${userAge}!`);

//3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
// let squareSideLength = +prompt('Введите, пожалуйста, длину стороны квадрата:');
// let squarePerimeter = squareSideLength * 4;
// alert(`Периметр квадрата = ${squarePerimeter}`);

//4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.
// let circleRadius = +prompt('Введите, пожалуйста, радиус круга:');
// let circleArea = circleRadius ** 2 * Math.PI;
// alert(`Площадь круга = ${circleArea}`);


//5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
// let tripDistance = +prompt('Введите, пожалуйста, расстояние между двумя городами в км:', '100');
// let tripHours = +prompt('За сколько часов хотите доехать?', '2');
// let tripSpeed = tripDistance / tripHours;
// alert(`Вам нужно двигатся со скоростю ${tripSpeed} км/час, чтобы успеть`);

//6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
// let howManyDollars = +prompt('Сколько $ хотите поменять?', '100');
// const euroRate = 1.19;
// function convertCurrency(dollars, euro) {
// 	return dollars / euro;
// }
// let result = convertCurrency(howManyDollars, euroRate);
// alert(`Получите ${result.toFixed(2)} Евро`); //.toFixed(2) - округляет до двух знаков после комы

// 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку
// let flashSize = +prompt('Укажите, пожалуйста, объем флешки в Гб:', '32')
// const mByte = 1024;
// const fileSize = 820;
// function transfer(gByte, mByte, fileSize) {
// 	return gByte * mByte / fileSize;
// };
// let result = transfer(flashSize, mByte, fileSize);
// alert(`На флешку помещается ${Math.floor(result)} файлов`); //Math.floor() - округляет до меньшего целого числа

// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
// let moneyWallet = +prompt('Сколько гривен у Вас в кошельке?', '100');
// let priceChoco = +prompt('Цена шоколадки?', '23');
// let numberChoco = moneyWallet / priceChoco;
// let moneyRest = moneyWallet - Math.floor(numberChoco) * priceChoco;
// alert(`Вы можете купить шоколадок - ${Math.floor(numberChoco)} и получить ${moneyRest.toFixed(2)} грн. здачи`); //.toFixed(2) - округляет до двух знаков после комы | Math.floor() - округляет до меньшего целого числа 

//9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
let number = +prompt('Введите любое трехзначное число:', '234');
let firstNumber = number % 10;
let middleNumber = Math.floor(number / 10)%10;
let lastNumber = Math.floor(number / 100)%10;
alert(`Ваше число в обратную сторону: ${firstNumber}${middleNumber}${lastNumber}`);


