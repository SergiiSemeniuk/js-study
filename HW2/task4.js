//1. Запросить у пользователя его возраст и определить, кем он является: 
//ребенком (0–12), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

// const inputAge = prompt('Сколько Вам лет?', '22');
// if (inputAge < 0) {
// 	alert('Ты из будущего?');
// }
// if (inputAge >= 0 && inputAge <= 12) {
// 	alert('Еще ребенок');
// }
// if (inputAge > 12 && inputAge <= 18) {
// 	alert('Подросток');
// }
// if (inputAge > 18 && inputAge <= 60) {
// 	alert('Совсем взрослый');
// }
// if (inputAge > 60 && inputAge <= 100) {
// 	alert('Пенсионер');
// } 
// if (inputAge > 100) {
// 	alert('Да Вы долгожитель');
// } 


// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

// const inputNumber = inputNumb();
// function inputNumb() {
// 	return +prompt('Введите число от 0 до 9', '2');
// }; 
// console.log(inputNumber);
// switch(inputNumber){
//     case 0 : {
//         alert(')');
//         break;
//     }
//     case 1 : {
//         alert('!');
//         break;
//     }
//     case 2 : {
//         alert('@');
//         break;
//     }
//     case 3 : {
//         alert('#');
//         break;
//     }
//     case 4 : {
//         alert('$');
//         break;
//     }
//     case 5 : {
//         alert('%');
//         break;
//     }
//     case 6 : {
//         alert('^');
//         break;
//     }
//     case 7 : {
//         alert('&');
//         break;
//     }
//     case 8 : {
//         alert('*');
//         break;
//     }
//     case 9 : {
//         alert('(');
//         break;
//     }
//     default : {
//         console.log('дичь');
//     }
// }


//3. Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.

// const inputNumber = inputNumb();
// function inputNumb() {
// 	return prompt('Введите любое трехзначное число', '122');
// }; 
// const arr = inputNumber.split('');
// const one = +arr[0];
// const two = +arr[1];
// const three = +arr[2];
// if (one === two || one === three || two === three) {
// 	alert('В числе есть одинаковые цифры');
// } else {
// 	alert('В числе нет одинаковых цифр');
// }


//4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
// const year = prompt('Введите год:', '2020');
// function leapYear(year) {
// 	year % 400 === 0 ||	year % 4 === 0 && year % 100 !== 0 ? alert(`${year} - высокосный`) : alert(`${year} - не высокосный`)
// }
// leapYear(year);

//5. Запросить у пользователя пятиразрядное число и определить, является ли  оно палиндромом.
// const inputNumber = prompt('Введите пятиразрядное число:', '12321');
// const arr = inputNumber.split('');
// palindrome(arr[0], arr[1], arr[3], arr[4]);
// function palindrome(one, two, four, five) {
// 	one === five && two === four ? alert('Число палиндром') : alert('число не палиндром');
// }


// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: 
// EUR, UAH или GBP, и получает в ответ соответствующую сумму.

// const inputUsd = +prompt('Сколько $ хотите поменять?', '100');
// const selectCurrency = prompt('Напишите на что хотите поменять (EUR - на евро, UAH - на грывны, GBP - на фунты):', 'EUR');
// const eurRate = 0.85;
// const uahRate = 27.42;
// const gbpRate = 0.76;
// let result = 0;
// console.log()
// switch(selectCurrency){
//     case 'EUR' : {
//     	result = inputUsd * eurRate
//         alert(`Получите - ${result} EUR`);
//         break;
//     }
//     case 'UAH' : {
//     	result = inputUsd * uahRate
//         alert(`Получите - ${result} UAH`);
//         break;
//     }
//     case 'GBP' : {
//     	result = inputUsd * gbpRate
//         alert(`Получите - ${result} GBP`);
//         break;
//     }
//     default : {
//         alert('Шо то не так');
//     }
// }

//q - Как зделать форму выбора валюты?


//7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
//от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

// const inputSum = +prompt('Сумма покупки:', '315.63');
// let discountedAmount = 0;
// switch(true){
//     case inputSum > 0 && inputSum < 200 : {
//         discountedAmount = inputSum;
//         console.log(`Скидки не будет, сумма к оплате - ${discountedAmount}`);
//         break;
//     }
//     case inputSum >= 200 && inputSum < 300 : {
//         discountedAmount = (inputSum - (inputSum * 0.03)).toFixed(2);
//         console.log(`Cумма к оплате - ${discountedAmount}`);
//         break;
//     }
//     case inputSum >= 300 && inputSum < 500 : {
//         discountedAmount = inputSum - (inputSum * 0.05).toFixed(2);
//         console.log(`Cумма к оплате - ${discountedAmount}`);
//         break;
//     }
//      case inputSum >= 500 : {
//         discountedAmount = inputSum - (inputSum * 0.07).toFixed(2);
//         console.log(`Cумма к оплате - ${discountedAmount}`);
//         break;
//     }
//     default : {
//         console.log('Неправельная сумма');
//     }
// }

//8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
// const сircumference = +prompt('Длина окружности:', '100');
// const perimeterSquare = +prompt('Периметр квадрата', '50');
// const circleDiameter = diameter(сircumference);
// const sideSquare = side(perimeterSquare)
// function diameter(сircumference) {
// 	return сircumference / Math.PI;
// }
// function side(perimeterSquare) {
// 	return perimeterSquare / 4;
// }
// console.log(circleDiameter, sideSquare);
// circleDiameter < sideSquare ? alert('поместиться :)') : alert('не поместиться :(')


// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
// За  каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

// const q1 = +prompt('Вопрос №1: бла бла? Варианты ответа: 1. верный, 2. неверный, 3. неверный. Напишите Ваш вариант ответа в поле ниже:', '1');
// const q2 = +prompt('Вопрос №2: бла бла? Варианты ответа: 1. неверный, 2. верный, 3. неверный. Напишите Ваш вариант ответа в поле ниже:', '1');
// const q3 = +prompt('Вопрос №3: бла бла? Варианты ответа: 1. неверный, 2. неверный, 3. верный. Напишите Ваш вариант ответа в поле ниже:', '1');
// const point = 2;
// let answer1 = 0;
// let answer2 = 0;
// let answer3 = 0;
// if (q1 === 1) {
// 	answer1 = point;
// }
// if (q2 === 2) {
// 	answer2 = point;
// }
// if (q3 === 3) {
// 	answer3 = point;
// }
// let result = answer(answer1, answer2, answer3);
// function answer(answer1, answer2, answer3) {
// 	return answer1 + answer2 + answer3;
// }
// alert(`Ваш результат в балах - ${result}`);


// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
// Учтите возможность перехода на следующий месяц, год, а также високосный год
const inputDate = prompt('Введите дату, число.месяц.год:', '22.07.2020');
let arr = inputDate.split('.', 3);
console.log(arr);
const day = +arr[0];
const month = +arr[1];
const year = +arr[2];
console.log(day, month, year);
function checkLeap(year) {
	if (year % 400 === 0 ||	year % 4 === 0 && year % 100 !== 0){
		return 1;
	}else {
		return 0;
	}
}
let leapYear = checkLeap(year);
console.log(leapYear);

function definitionMonth(month) {
	let month1 = 0;
	switch(month){
		case 1 :
	  	case 3 :
	  	case 5 :
	  	case 7 :
	  	case 8 :
	    case 10 : {
	    	month1 = 1;
	    	break;
	    }
	    case 4 :
	  	case 6 :
	  	case 9 :
	  	case 11 :{
	  		month1 = 2;
	  		break;
	  	}
		case 2 : {
			month1 = 3;
			break;
		}
		case 12 : {
			month1 = 4;
			break;
		}
		default : {
			console.log('дичь');
		}
	}
	return month1;
}
let monthNumber = definitionMonth(month);
console.log(monthNumber);
let dayNew = 0;
let monthNew = 0;
let yearNew = 0;
if (monthNumber == 1 && day > 0 && day <= 30) {
	dayNew = day + 1;
	monthNew = month;
	yearNew = year;
}
if (monthNumber == 1 && day === 31) {
	dayNew = 1;
	monthNew = month + 1;
	yearNew = year;
}
if (monthNumber == 2 && day > 0 && day <= 29) {
	dayNew = day + 1;
	monthNew = month;
	yearNew = year;
}
if (monthNumber == 2 && day === 30) {
	dayNew = 1;
	monthNew = month + 1;
	yearNew = year;
}
if (monthNumber == 3 && day > 0 && day <= 27) {
	dayNew = day + 1;
	monthNew = month;
	yearNew = year;
}
if (leapYear === 1 && monthNumber == 3 && day === 28) {
	dayNew = day + 1;
	monthNew = month;
	yearNew = year;
}
if (leapYear === 0 && monthNumber == 3 && day === 28) {
	dayNew = 1;
	monthNew = month + 1;
	yearNew = year;
}
console.log(dayNew, monthNew, yearNew);

