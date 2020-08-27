// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word 
// hould have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Ваше завдання - відсортувати заданий рядок. Кожне слово в рядку міститиме одне число. Це число - позиція, 
// яку слово повинно мати в результаті.
// Примітка: Числа можуть бути від 1 до 9. Отже, 1 буде першим словом (а не 0).
// Якщо вхідний рядок порожній, поверніть порожній рядок. Слова у вхідному рядку будуть містити лише дійсні послідовні числа.

sortingWord(prompt('Enter a string', '4of Fo1r pe6ople g3ood th5e the2'))
function sortingWord(inString) {
	let arr = inString.split(' ');
		let arr1 = [];
	for (let i = 0, j = 0; i < arr.length; i++) {
		j = (+/\d+/.exec(arr[i])) - 1;
		arr1[j] = arr[i];
	}
		alert(arr1.join(' '));
 }