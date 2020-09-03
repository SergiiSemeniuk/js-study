// task1.1
// Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде. 
// Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.

// const inputNumber = prompt('Введите двухзначное число:', '32');
// inputNumber >= 10 && inputNumber < 100 ? translNumber(inputNumber) : console.log('Число не двухзначное');
// function  translNumber(number) {
// 	const firstNum = number[0];
// 	const secondNum = number[1];
// 	const arrTen = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
// 	const arrDes = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семдесят', 'восемьдесят', 'девяносто'];
// 	const arrUnits = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
// 	let result;

// 	if (firstNum == 1) {
// 		result = arrTen[secondNum];		
// 	}

// 	if (firstNum > 1) {
// 		const filter1 = arrDes.filter((el, i) => i == firstNum - 2);
// 		const filter2 = arrUnits.filter((el, i) => i == secondNum);
// 		result = filter1.concat(filter2).join(' ');
		
// 	}
// 	console.log(result);
// }


// task1.2
// Написать функцию, которая принимает строку и выводит статистику о ней: 
// количество букв, количество цифр и количество других знаков.
// const inputStr = prompt('Напишите строку:', 'JDfhslcsjh29 3437;sldkf..sj :kd3s5kf,.?');
// const reg = /[^a-zA-Z0-9]/g;

// inputStr != false ? statString(inputStr) : console.log('строка пустая');

// function statString(str) {
// 	const otherChars = inputStr.match(reg).length;
// 	let arr = str.toLowerCase().split(reg).join('').split('');
// 	const letters = arr.filter(el => isNaN(el * 1)).length;
// 	const number = arr.filter(el => !isNaN(el * 1)).length;
// 	console.log(`
// 		Количество букв в строке - ${letters}
// 		Количество цифр - ${number}
// 		Количество других знаков - ${otherChars}`);
// }

// task1.3
// Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, 
// маленькие – на большие, а цифры – на знак нижнего подчеркивания.
const inputStr = prompt('Напишите строку:', 'JKSLgsdri232380');
inputStr != false ? replacement(inputStr) : console.log('строка пустая');
function replacement(str) {
	let arr = str.split('');
	console.log(arr);
	const result = arr.map(function(el){
		if (!isNaN(el * 1)) {
			el = '_';
		}
		el == el.toUpperCase() ? el = el.toLowerCase() : el = el.toUpperCase();
    return el;
	});
	console.log(result);
}

