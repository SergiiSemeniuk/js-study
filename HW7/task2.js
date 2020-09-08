// Task2_1
// Написать функцию, которая преобразует названия cssстилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, text-align в textAlign.

// console.log(transform('list-style-type'));
// function transform(style) {	
// 	const result = style.split('-').reduce((acc, el) => {
//         el = el[0].toUpperCase() + el.slice(1);   //замена первой буквы в слове на Заглавную              
//         return acc + el;
// 	});
// 	return result;
// }


// Task2_2
// Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.

// console.log(makeAbbr('объектно-ориентированное программирование'));
// function makeAbbr(phrase) {
// 	return phrase.replace(/[^a-zA-Zа-яА-я]/g, ' ').split(' ').map(el => el[0].toUpperCase()).join('');	//замена не буквеных символов на пробел. сплит в масив. мап по первому символу елементов. в Верхний регистр. обьеденить в строку
// }


// Task2_3
// Написать функцию, которая получает url и выводит подробную информацию о нем.
// Например: url “https://career.softserveinc.com/en-us/learning-and-certification/formats-2/”, информация
// “протокол: https, домен: career.softserveinc.com, путь: en-us/learning-and-certification/formats-2/”.

console.log(urlInform('https://career.softserveinc.com/en-us/learning-and-certification/formats-2/'));
function urlInform(url) {
	let arr = url.replace(/\/+/g, '/').split('/');
	return (`протокол: ${arr.shift().replace(/:/g, '')}, домен: ${arr.shift()}, путь: ${arr.join(' ').replace(/ /g, '/')}`);
}